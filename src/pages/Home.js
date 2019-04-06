import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Menu, Icon } from 'antd';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Home extends Component {
    constructor(props) {
        super(props);
    }


    state = {
        current: 'mail',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <div>
                <p>
                    This is Home Page
                </p>
            </div>
        );
    }
}

export default Home;
