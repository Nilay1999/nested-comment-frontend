import React, { useState } from 'react';

export const Comment = ({ val, childCount }) => {
	const [visible, setVisible] = useState(childCount <= 1);
	const [load, setLoad] = useState(true);
	const toggleVisible = () => {
		setVisible(!visible);
		setLoad(!load);
	};
	return (
		<div style={{ borderColor: 'black', width: 'auto' }}>
			<span style={{ fontSize: 20 }}>{val.message}</span>
			{!visible && val?.children?.length > 0 ? (
				<pre
					onClick={toggleVisible}
					style={{
						fontSize: 12,
						paddingLeft: 30,
						textDecoration: 'underline',
					}}>
					load more{val?.children?.length}
				</pre>
			) : (
				<></>
			)}

			{visible ? (
				val?.children?.map((child) => {
					return (
						<div style={{ paddingLeft: 20 }}>
							<Comment val={child} childCount={childCount + 1} />
						</div>
					);
				})
			) : (
				<></>
			)}
		</div>
	);
};
