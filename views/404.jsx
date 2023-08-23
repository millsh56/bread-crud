const React = require('react')
const Default = require('./layouts/default')

function notFound (html) {
    return (
        <Default>
            <h2>Page Not Found</h2>
            <h3>This page doesn't exist yet! Would you like it to? Head to the home page to create a new bread!</h3>
            <li><a href="/breads">Go home</a></li>
        </Default>
    )
}

module.exports = notFound