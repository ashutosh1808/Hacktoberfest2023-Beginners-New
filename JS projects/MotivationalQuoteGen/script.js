function gq()
{
	event.preventDefault()
	let ans=document.getElementById("ans")
	let urladd="https://api.quotable.io/random"
	fetch(urladd)
	.then(res=>res.json())
	.then(data=>{
		ans.innerHTML=data.content+"~~"+data.author
	})
	.catch(err=>console.log(err))
}