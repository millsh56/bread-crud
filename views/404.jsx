const React = require('react')
const Default = require('./layouts/default')

function notFound () {
    return (
        <Default>
            <h2>Page Not Found</h2>
            <h3>This page doesn't exist yet! Would you like it to? Head to the home page to create a new bread!</h3>
            <div><img src= 'https://http.cat/404.jpg'/></div>
            <li><a href="/breads"><button>Go Home</button></a></li>
       
        </Default>
    )
}

module.exports = notFound