function strip(w)
	{
		let re=new RegExp('^(a|the|an)','i');
		return w.replace(re,'').trim()
	}
const sortedBands=bands.sort((a,b)=>(strip(a)>strip(b))?1:-1)

