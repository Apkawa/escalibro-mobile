/** @jsx React.DOM */
var React = require('react'),
    mui = require('material-ui'),
    RaisedButton = mui.RaisedButton


var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];

var Comment = React.createClass({
    render: function () {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                  <RaisedButton label={this.props.author}/>
                </h2>
        {this.props.children}
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author}>
          {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
            {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function () {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});

var CommentBox = React.createClass({
    render: function () {
        console.log(123)
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
                <h1>Comments:</h1>
                <CommentList data={this.props.data}/>
                <CommentForm />
            </div>
        );
    }
});
var _d = data;

React.render(
    <CommentBox data = {_d} />,
    document.getElementById('content')
)
;