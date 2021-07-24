import React, { useState, useEffect } from "react";
import axios from "axios";
const Datafeching = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [fetchId, setfetchId] = useState(1)
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                console.log(res.data);
                setPost(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[fetchId]);

    const handleClick =() => {
        setfetchId(id)
    }
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <div>
            <button type="button" onClick={handleClick} style={{ margin: '10px',
    boxSizing: 'content-box',
    }}>Fetch ID</button>
            </div>
            <div>{post.title}</div>
            {/* <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    );
};

export default Datafeching;
