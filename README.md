
# React Group Chatup UI Component

React UI component to allow public group chat ui on react projects & platforms where multiple users can participate in public group chat.

## Features

- Customizable.
- Easy to use.
- Responsive.
- Cross platform


## Requirements

- React version >= 16
- Node version >= 14 
## Installation

```bash
  npm install react-group-chatup
```
    
## Usage/Examples

```javascript
import React, {useState} from 'react
import Chatbox from 'react-group-chatup'

function App() {
  const [messages, setMessages] = useState([])

  const _onSendMessage = (data) => {
    const messageObj = {
      avatar: userIcon,
      auther: 'me',
      auther_name: 'Demo User',
      data: data,
      created_at: new Date().toDateString()
    }
    _updateMessageList(messageObj);
  }

  return <div>
            <Chatbox 
              messages={messages}
              _onSendMessage={_onSendMessage} 
            />
        </div>
}
```
Note: All backend/Database related actions need to be handled in _onSendMessage event.

## Props

|Name|Type|Required|Default Value|Description
|:----|:----|:----|:----|:----|
|brandName|String|No|Package Name|Allows to display your app name on component's header.|
|brandLogo|String|No|Package's Logo|Allows to use your own app's logo on the chat header.|
|brandLogoHeight|String|No|30px|Allows to set the height of brand logo of your app.|
|brandLogoWidth|String|No|30px|Allows to set the width of brand logo of your app.|
|theme|String|No|#0099cc|Allows to change the theme color of the component according to your app's theme.|
|themeTextColor|String|No|#ffffff|Allows to change the theme text color of the component.|
|avatar|Boolean|No|true|If disabled, user's avatars in messages will not be displayed.|
|emoji|Boolean|No|true|If disabled, emoji options will be hidden.|
|sound|Boolean|No|true|if disabled, message notification tune will be paused.|
|messages|Array|Yes|Empty Array|This prop contains list of all messages in an array with a specific object structure.|
|_onSendMessage|Function|Yes| |This methods handles the event of pressing enter or send message button action. It allows you to handle backend/database related actions to update DB and message arrays.|



## Message Object
```javascript
    {
        avatar: user_avatar.png,
        auther: 'me | other',
        auther_name: 'Demo User',
        data: 'Hello world...',
        created_at: 'Aug 28, 2022'
    }
```
## Authors

- [@ahmedmalik93](https://github.com/ahmedmalik93)


## License

[MIT](https://choosealicense.com/licenses/mit/)

