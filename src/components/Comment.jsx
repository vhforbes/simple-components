import { faker } from "@faker-js/faker"

export default Comment = ({ avatar, name, date, comment }) => (
    <div className="ui container comments">
        <div className="comment">
            <a className="avatar" href="">
                <img src={avatar} alt="" />
            </a>
            <div className="content">
                <a className="author">{name}</a>
                <div className="metadata">
                    <span className="date">{date}</span>
                </div>
                <div className="text">{comment}</div>
            </div>
        </div>
    </div>
)
