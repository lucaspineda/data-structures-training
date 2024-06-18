
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

    function inorder(current_node) {
        if (current_node?.left) {
            inorder(current_node.left)
        }
        console.log(current_node?.val)
        result.push(current_node?.val)
        console.log(result)

        if (current_node?.right) {
            inorder(current_node.right)
        }
    }
    inorder(root)
    return result
    
    
};

console.log(inorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))))