import Conversations from "../conversation/Conversation.jsx";
import {SearchInput,LogoutBtn} from "../shared";

const Sidebar = () => {
	return (
		<div className='border-r border-gray-200 p-4 flex flex-col shadow-custom-wheat'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutBtn />
		</div>
	);
};
export default Sidebar;