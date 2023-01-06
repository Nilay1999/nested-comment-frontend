import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Comment } from './Comment';
import Card from 'react-bootstrap/Card';

export const CommentList = () => {
	const [comments, setComments] = useState([]);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		axios.get('http://localhost:8080/comment').then((res) => {
			console.log(res.data);
			setComments(res.data);
		});
	}, []);
	return (
		<div>
			<Card style={{ width: '18rem', margin: 'auto' }}>
				<Card.Body>
					{comments.map((val, key) => {
						return <Comment val={val} childCount={0} />;
					})}
				</Card.Body>
			</Card>
		</div>
	);
};
