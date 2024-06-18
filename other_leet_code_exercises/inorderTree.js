
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    result = []

    if (root?.left) {
        inorderTraversal(root.left)
    }
    console.log(root?.val)
    result.push(root?.val)
    console.log(result)

    if (root?.right) {
        inorderTraversal(root.right)
    }
    return result
    
    
};

console.log(inorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))))