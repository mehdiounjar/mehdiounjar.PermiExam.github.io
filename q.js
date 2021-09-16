var rep;
var r;
var p;
var rep2;
var s;
var t;
function rep()
{
    rep2=0;
  if (document.getElementById("a1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("b1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("c1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("d1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("e1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("f1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("j1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("h1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("g1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("k1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("l1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("m1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("n1").checked)
  {
      rep2=rep2+1;
  } 
   if (document.getElementById("q1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("p1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("r1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("s1").checked)
  {
      rep2=rep2+1;
  }
  
  if (document.getElementById("t1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("v1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("w1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("x1").checked)
  {
      rep2=rep2+1;
  }
  if (document.getElementById("y1").checked)
  {
      rep2=rep2+1;
  }
  if (rep2>=10)
  {
      r="admis";
  }
  if(rep2<10)
{
r="non admis";
} 
p=(rep2*100)/20;
  alert("Votre resultat de Serie N°1  est: "+rep2+"\n"+ "Mention : "+r+"\n"+"Pourcentage des repenses juste : "+p+"%");
}
var c;
var t;
var m;
function a()
{
    c=0;
    if (document.getElementById("a10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("b10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("c10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("d10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("e10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("f10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("j10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("h10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("i10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("g10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("k10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("l10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("m10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("n10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("q10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("p10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("r10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("s10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("t10").checked)
  {
      c=c+1;
  }
  if (document.getElementById("y10").checked)
  {
      c=c+1;
  }
      if (c>=10)
      {
          m="admis";
      }
      if (c<10)
    {
    m="non admis";
    } 
    t=(c*100)/20;
      alert("Votre resultat de Serie N°2  est: "+c+"\n"+ "Mention : "+m+"\n"+"Pourcentage des censes juste : "+t+"%");
      localStorage.getItem(c);
    }
    var s;
    var p2;
    var r2;
    
function b()
{

    s=0;
    if (document.getElementById("a10").checked)
  {
      s=s+1;
  }
  if (document.getElementById("b10").checked)
  {
      s=s+1;
  }
  if (document.getElementById("c10").checked)
  {
      s=s+1;
  }
  if (document.getElementById("d10").checked)
  {
      s=s+1;
  }
  if (document.getElementById("e10").checked)
  {
      s=s+1;
  }
  if (document.getElementById("f10").checked)
  {
      s=s+1;
  }
  if (document.getElementById("j10").checked)
  {
      s=s+1;
  }
  if (document.getElementById("h10").checked)
  {
      s=s+1;
  }
  if (document.getElementById("i10").checked)
  {
      s=s+1;
  }
  if (document.getElementById("g10").checked)
  {
      s=s+1;
  }
  if (document.getElementById("k10").checked)
  {
      s=s+1;
  }
  if (document.getElementById("l10").checked)
  {
      s=s+1;
  }
  if (document.getElementById("m10").checked)
  {
      s=s+1;
  }
  if (document.getElementById("n10").checked)
  {
      s=s+1;
  }
  if (document.getElementById("q10").checked)
  {
      s=s+1;
  }
  if (document.getElementById("p10").checked)
  {
      s=s+1;
  }
  if (document.getElementById("r10").checked)
  {
      s=s+1;
  }
  if (document.getElementById("s10").checked)
  {
      s=s+1;
  }
  if (document.getElementById("t10").checked)
  {
     s=s+1;
  }
  if (document.getElementById("y10").checked)
  {
      s=s+1;
  }
      if (s>=10)
      {
        p2="admis";
      }
      if (s<10)
    {
        p2="non admis";
    } 
    r2=(s*100)/20;
      alert("Votre resultat de Serie N°3  est: "+s+"\n"+ "Mention : "+p2+"\n"+"Pourcentage des censes juste : "+r2+"%");

    }
function resultat_q3 ()
{
document.getElementById("a13").checked=true;
document.getElementById("b10").checked=true;
document.getElementById("c10").checked=true;
document.getElementById("d11").checked=true;
document.getElementById("e12").checked=true;
document.getElementById("e13").checked=true;
document.getElementById("f11").checked=true;
document.getElementById("j10").checked=true;
document.getElementById("x13").checked=true;
document.getElementById("h10").checked=true;
document.getElementById("h11").checked=true;
document.getElementById("i11").checked=true;
document.getElementById("g11").checked=true;
document.getElementById("g12").checked=true;
document.getElementById("k11").checked=true;
document.getElementById("l11").checked=true;
document.getElementById("l13").checked=true;
document.getElementById("m10").checked=true;
document.getElementById("n11").checked=true;
document.getElementById("q10").checked=true;
 document.getElementById("p10").checked=true;
 document.getElementById("r11").checked=true;
 document.getElementById("r12").checked=true;
 document.getElementById("s10").checked=true;
 document.getElementById("t10").checked=true;
 document.getElementById("t11").checked=true;
  document.getElementById("y11").checked=true;
}
function resultat_q2()
{
document.getElementById("a11").checked=true;
document.getElementById("b12").checked=true;
document.getElementById("b11").checked=true;
 document.getElementById("c12").checked=true;
 document.getElementById("c13").checked=true;
document.getElementById("d10").checked=true;
document.getElementById("d11").checked=true;
document.getElementById("e11").checked=true;
document.getElementById("f13").checked=true;
document.getElementById("j11").checked=true;
document.getElementById("h11").checked=true;
document.getElementById("i11").checked=true; 
document.getElementById("g11").checked=true;
document.getElementById("k10").checked=true;
document.getElementById("l10").checked=true;
document.getElementById("m10").checked=true;
document.getElementById("m11").checked=true;
document.getElementById("n11").checked=true;
document.getElementById("q11").checked=true;
document.getElementById("p10").checked=true;
document.getElementById("r10").checked=true;
document.getElementById("s11").checked=true;
document.getElementById("t11").checked=true;  
document.getElementById("y10").checked=true; 
}
function resultat_q1()
{
document.getElementById("a1").checked=true;
document.getElementById("b3").checked=true;
document.getElementById("c4").checked=true; 
document.getElementById("c1").checked=true;
document.getElementById("d2").checked=true;
document.getElementById("e2").checked=true;
document.getElementById("f1").checked=true;
document.getElementById("j3").checked=true;
document.getElementById("j2").checked=true;
document.getElementById("h1").checked=true;
document.getElementById("g1").checked=true;
document.getElementById("g4").checked=true;
document.getElementById("k3").checked=true;
document.getElementById("l2").checked=true;
document.getElementById("l3").checked=true;
document.getElementById("m1").checked=true;
document.getElementById("n2").checked=true;
document.getElementById("q1").checked=true; 
document.getElementById("q3").checked=true; 
document.getElementById("p1").checked=true; 
document.getElementById("r1").checked=true;
document.getElementById("s1").checked=true;
document.getElementById("t2").checked=true;
document.getElementById("v2").checked=true;
 document.getElementById("w2").checked=true; 
document.getElementById("x2").checked=true;
document.getElementById("x2").checked=true;
document.getElementById("y4").checked=true;
 }
 function total() {
    let summ;
    summ = rep2 + s + c;
    alert("La somme des trois pages est "+{summ})
}