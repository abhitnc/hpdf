import React from 'react';
import {TrendsBox,WhoToFollow,SelfCard,Feeds} from './Commons';
import Avatar from "material-ui/Avatar";

import Paper from "material-ui/Paper"



class HomePage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			searchword:this.props.searchword,
		}
	}
	render(){
	   return(
		  <div>
			<SelfCard data = {SelfJSON}/>  
			<Paper zDepth={3}
			   	  style={{backgroundColor:"rgb(0, 255, 180)",width:"50%",height:"62px",
				  marginLeft:"330px",marginTop:"75px",position:"absolute",zIndex:"95",
				  boxShadow:"5px 5px 50px #100",border:"2.5px ridge black"}}>

				  <Avatar src="https://lh3.googleusercontent.com/-s9zHS3mFy0A/WeAtmoTynFI/AAAAAAAAUtI/hvB8OLmJWZwUEUmDaU9Z4rZuOJcG0egggCEwYBhgL/w140-h140-p/IMG_4940.JPG" style={{margin:"1%",marginLeft:"25px"}}/>
				  <input type="text" style={{position:"absolute",margin:"10px",height:"30px",width:"75%",
					borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",
					borderTopRightRadius:"10px",borderTopLeftRadius:"10px", paddingLeft:"15px",
					backgroundColor:"rgba(0,0,0,0.75)",color:"white",
					fontSize:"16px"}} placeholder="Hi, Post something you want to"/>
				  <input type="file" name="file" id="file" className="input-file"
						 accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v" 
						 style={{position:"absolute",right:"100px",top:"19px",marginRight:"10px",
						 		width:"0.1px",height:"0.1px",zIndex:"-1",opacity:"0",overflow:"hidden"}}/>
				  <label id="inp_label" htmlFor="file" style={{backgroundColor: "rgb(0, 191, 255)",display: "inline",cursor:"pointer",position:"absolute",
					right:"95px",top:"13.5px",width:"35px",height:"30px"}}>
				  	<svg width="20" height="17" viewBox="0 0 20 17" style={{margin:"6px",marginLeft:"8px"}}>
					    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
					  </svg>
				  </label>				 
				  		 	
			</Paper>	  
			<Feeds feedList={feedJSON}/>
			<TrendsBox style={{position:"absolute",width:"300px",marginLeft:"10px",top:"350px", paddingTop:"0.25px",
				boxShadow:"5px 5px 50px #blue", backgroundImage:"url('starry_bg_std.png')",border:"1px solid blue"}} taglist={tagJSON}/>
			<WhoToFollow float="right" mright = "20px" mtop = "75px" userList = {UserJSON}/>	  
		  </div>
	   );	 	 
	}

	
}

var SelfJSON = {
	"key":0,
	"Name": "MS Dhoni",
	"ava": "https://lh3.googleusercontent.com/-s9zHS3mFy0A/WeAtmoTynFI/AAAAAAAAUtI/hvB8OLmJWZwUEUmDaU9Z4rZuOJcG0egggCEwYBhgL/w140-h140-p/IMG_4940.JPG",
	"Tag":"@mahi7781",
	"Cover":"https://media.istockphoto.com/photos/sunrise-on-yosemite-valley-picture-id505872990?k=6&m=505872990&s=612x612&w=0&h=XcdHhkC9PF9-saYT6n_GQD-0Hf8dbI_Q4wfYlZZGpNk=",
	"Theme":"white",
	"Status":"Serving the country in form of Indian National Team",
	"Tweets":"94k",
	"FlingCount":"195",
	"FlerCount":"352",
	"FollowerList":["Virat Kohli"]
}

var tagJSON = [
	{
		"title": "VSCode",
		"count": "947"
	},
	{
		"title": "Sublime",
		"count": "812"
	},
	{
		"title": "Brackets",
		"count": "2441"
	},
	{
		"title": "NotePad++",
		"count": "1642"
	},
	{
		"title": "NotePad",
		"count": "758"
	},
	{
		"title": "WordPad",
		"count": "457"
	},
	{
		"title": "Atom",
		"count": "1.12K"
	},
	{
		"title": "WebStorm",
		"count": "437"
	}
]

var UserJSON = [
	{
		"key":0,
		"Name": "GitHub",
		"ava": "https://pbs.twimg.com/profile_images/616309728688238592/pBeeJQDQ_400x400.png",
		"Tag":"@GitHub",
		"Cover":"http://blog.atom.io/img/posts/github-for-atom.png",
		"Theme":"pink",
		"Status":"How people build software. Need help? Send us a message at http://git.io/c  for support.",
		"Tweets":"3,724",
		"FlingCount":"283",
		"FlerCount":"1.69M",
		"FollowerList":["sanson","Daniel R. Torres Ruiz","lianyingjie"]
	},
	{
		"key":1,
		"Name": "GitHub API",
		"ava": "https://pbs.twimg.com/profile_images/1978599420/electrocat_400x400.png",
		"Tag":"@GitHubAPI",
		"Cover":"https://2.bp.blogspot.com/-xz97yI-0gpo/WUoYeGl7h-I/AAAAAAAAtQc/7HdOijzpIAsE2Uk5ZB9teWKCLpZJXGgIACLcBGAs/s1600/nsa-github-projects.png",
		"Theme":"Blue",
		"Status":"GitHub API announcements. Send feedback/questions to https://github.com/contact",
		"Tweets":"483",
		"FlingCount":"15",
		"FlerCount":"16.5K",
		"FollowerList":["th3 furth3r","Sam Bogaert","Amrit Atmajit"]
	},
	{
		"key":2,
		"Name": "GitHub support",
		"ava": "https://pbs.twimg.com/profile_images/818913837034278913/E5R-Rwjp_400x400.jpg",
		"Tag":"@githubhelp",
		"Cover":"https://classroom.github.com/images/og-image.png",
		"Theme":"blue",
		"Status":"Official @github suppo rt is here to help! No DMs, please. Tweet or send a note to http://git.io/c . Find even more answers at http://help.github.com .",
		"Tweets":"11.8K",
		"FlingCount":"16",
		"FlerCount":"10.4K",
		"FollowerList":["Sam Bogaert","Jim Bodurtha","ALEKSEY LEUKHIN"]
	},
	{
		"key":3,
		"Name": "GitHub Jobs",
		"ava": "https://pbs.twimg.com/profile_images/625760778554093568/dM7xD4SQ_400x400.png",
		"Tag":"@githubjobs",
		"Cover":"http://4.bp.blogspot.com/-f94x13PlSnM/VQ6FlovuH2I/AAAAAAAADcY/crBffaFHvRk/s1600/1000px-GitHub.svg.png",
		"Theme":"Green",
		"Status":"Find the job you want.",
		"Tweets":"15.6K",
		"FlingCount":"1",
		"FlerCount":"13.9K",
		"FollowerList":["Gilberto Botaro","Captain America","Hulk"]
	}
]

var feedJSON = [
	{	
		key:0,
		user:UserJSON[0],
		"timestamp":"1 year",
		"text_content":UserJSON[0].Status,
		"embed_data":UserJSON[0].Cover
	},
	{
		key:1,
		user:UserJSON[1],
		"timestamp":"3 months",
		"text_content":UserJSON[1].Status,
		"embed_data":UserJSON[1].Cover
	},
	{
		key:2,
		user:UserJSON[2],
		"timestamp":"27 days",
		"text_content":UserJSON[2].Status,
		"embed_data":UserJSON[2].Cover
	},
	{
		key:3,
		user:UserJSON[3],
		"timestamp":"9 months",
		"text_content":UserJSON[3].Status,
		"embed_data":UserJSON[3].Cover
	}
]

export default HomePage