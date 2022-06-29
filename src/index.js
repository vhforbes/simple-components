import { faker } from "@faker-js/faker"
import React from "react"
import ReactDOM from "react-dom/client"
import Comment from "./components/Comment"

const root = ReactDOM.createRoot(document.getElementById("root"))

const App = () => {
    return (
        <div>
            <Comment
                avatar={faker.image.avatar()}
                name={faker.name.findName()}
                date={"20/02/2022"}
                comment={faker.random.words()}
            />
            <Comment
                avatar={faker.image.avatar()}
                name={faker.name.findName()}
                date={"20/02/2022"}
                comment={faker.random.words()}
            />
            <Comment
                avatar={faker.image.avatar()}
                name={faker.name.findName()}
                date={"20/02/2022"}
                comment={faker.random.words()}
            />
        </div>
    )
}

root.render(<App />)
