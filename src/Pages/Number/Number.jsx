import React, {Component} from 'react'

class Number extends Component {
    render() {
        const number = [1, 2, 3, 4, 5]
        const listItem = number.map((number) => {
            return <li key={number}>{number}</li>
        })

        return (
            <div>
                <ul>{listItem}</ul>
            </div>
        )
    }
}

export default Number