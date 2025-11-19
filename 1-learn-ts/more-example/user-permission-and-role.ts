type UserProfile = {
  userId: string;
  username: string;
  email: string;
};

type Permissions = {
  canRead: boolean;
  canWrite: boolean;
  canDelete: boolean;
};

type RoleBased = {
  role: 'admin' | 'moderator' | 'user';
  permissions: string[];
};

type SessionInfo = {
  loggedInAt: Date;
  lastActive: Date;
  sessionId: string;
};

// Intersection creates complete user session object
type AuthenticatedUser = UserProfile & Permissions & RoleBased & SessionInfo;

const adminUser: AuthenticatedUser = {
  // From UserProfile
  userId: "123",
  username: "admin",
  email: "admin@example.com",
  
  // From Permissions
  canRead: true,
  canWrite: true,
  canDelete: true,
  
  // From RoleBased
  role: "admin",
  permissions: ["read:all", "write:all", "delete:all"],
  
  // From SessionInfo
  loggedInAt: new Date(),
  lastActive: new Date(),
  sessionId: "session-123"
  // ✅ Must satisfy ALL properties from ALL four types
};

function checkPermission(user: AuthenticatedUser, action: string): boolean {
  // We can access ANY property from the intersection
  if (user.role === 'admin') return true;
  return user.permissions.includes(action) && user.canWrite;
}