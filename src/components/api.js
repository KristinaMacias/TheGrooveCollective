const DISCUSSION_ENDPOINT = 'https://crudcrud.com/api/2c5f979ab5c44c048a2c65c1ae22403d';

class DiscussionAPI {
    get = async () => {
        try {
            const resp = await fetch(DISCUSSION_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch (e) {
            console.log('Oops, looks like fetch discussion had an issue.', e)
        }
    }

    put = async (comment) => {
        try {
            const resp = await fetch(`${DISCUSSION_ENDPOINT}/${comment._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(comment)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, it looks like updating comments had an issue', e)
        }
    }
}

export const discussionAPI = new DiscussionAPI();