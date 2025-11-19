// Tree structure with generics
interface TreeNode<T> {
  value: T;
  children: TreeNode<T>[];
}

// Usage with complex types
const categoryTree: TreeNode<{ name: string; count: number }> = {
  value: { name: "Electronics", count: 150 },
  children: [
    {
      value: { name: "Laptops", count: 75 },
      children: []
    }
  ]
};