import { Outlet } from 'react-router-dom';

export default function LayoutPrivate({ children }) {
	return (
		<div className="wrapper">
			<div className="content-wrapper">
				<div className="content">
					<div className="container-fluid">
						<h1>LayoutPrivate</h1>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}
