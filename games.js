import { 
	DomType,
	sydDOM,
	setStyle,
	styleComponent,
	mount,
	createElement,
	preState,
} from "./sydneyDom.js";

setStyle([
	{
		nameTag:'gamePage',
		style:{
			minHeight:'100%',
			height:'fit-content',
			width:'100%',
			backgroundImage:'url("./game.png")',
			animationDelay:'5s',
			display:'flex',
			alignItems:'center',
			flexDirection:'column',
			rowGap:'50px',
			padding:'50px 10px'
		}
	},
	{
		nameTag:'gamePan',
		style:{
			height:'fit-content',
			width:'100%',
			padding:'10px 0',
			display:"flex",
			justifyContent:'center',
			flexWrap:'wrap',
			columnGap:'20px',
			rowGap:'20px'
		}
	}
])

sydDOM.games = () =>{
    return createElement(
        'div',
		{
			style:styleComponent.gamePage(),
			class:'gamePage cloudLikeAnime'
		},
		[
			createElement(
                'h3',
                {
                    style:'color:rgb(26, 147, 255);text-transform:capitalize;text-shadow:2px 3px 2px #000'
                },
                [
                    'games'
                ]
            ),
			sydDOM.gamesPanel()
		]
    )
}

sydDOM.gamesPanel = () =>{
	return createElement(
		'div',
		{
			style:styleComponent.gamePan()
		},
		[
			sydDOM.gameTab({img:'newDice'}),
			sydDOM.gameTab({img:'flip',text:'flip coin'}),
			sydDOM.gameTab({img:'rps',text:'rock-paper-scissors'}),
			sydDOM.gameTab({img:'black',text:'blackjack'}),
			sydDOM.gameTab({img:'roul',text:'roulette'}),
		]
	)
}

sydDOM.gameTab = ({img = 'join',text = 'dice game',writeUp = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate obcaecati corporis incidunt'} = {}) =>{
	return createElement(
		'a',
		{
			style:`position:relative;height:fit-content;min-height:300px;width:250px;border-radius:10px;overflow:hidden;display:flex;flex-direction:column;color:#fff;background-color:rgb(26, 147, 255);cursor:pointer;text-decoration:unset`,
			class:"gameCard",
			href:botLink
		},
		[
			createElement('h4',{style:'font-weight:900;text-shadow:2px 3px 2px #000;line-height:30px;font-size:25px;text-align:center;text-transform:uppercase'},[`${text}`]),
			createElement('div',{style:`height:150px;width:100%;background-image:url('./${img}.jpg');background-size:cover;`,class:'commonImg'}),
			createElement('p',{style:'padding:5px;text-align:center;box-shadow:-2px 2px 100px 80px rgb(26, 147, 255)'},[writeUp]),
			createElement('div',{style:'height:100%;width:100%;position:absolute;top:0;display:flex;justify-content:center;align-items:center;font-size:25px;font-weight:800;background:rgba(26, 147, 255,.4);backdrop-filter:blur(.8px)',class:'overlay'},[
				text !== 'dice game' ? 'COMING SOON' : 'PLAY'
			])
		]
	)
}