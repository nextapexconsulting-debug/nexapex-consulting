export default function Stats() {

const stats = [
["100+","Projects"],
["10+","Years"],
["24/7","Support"],
["100%","Client Focus"]
];

return(

<section>

<div className="container">

<div
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(220px,1fr))",
gap:"20px"
}}
>

{stats.map((s)=>(
<div
key={s[1]}
className="card"
style={{
padding:"40px",
textAlign:"center"
}}
>

<h2
style={{
fontSize:"56px",
color:"#FF6A00"
}}
>
{s[0]}
</h2>

<p>{s[1]}</p>

</div>
))}

</div>

</div>

</section>

);

}