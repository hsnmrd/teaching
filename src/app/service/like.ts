export const likePost = async (nextIsLiked: boolean) => {
    const response = await fetch('/api/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nextIsLiked }),
    })
    return await response.json() as {isLiked: boolean}
}