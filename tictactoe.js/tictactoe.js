var c=0;
var n=0;
var t=0;
var flag=0;


function c1()
{
  n=c;
  c=0;
  fill();

}

function c2()
{
  n=c;
  c=1;
  fill();
}

function c3()
{
  n=c;
  c=2;
  fill();
}

function c4()
{
  n=c;
  c=3;
  fill();
}

function c5()
{
  n=c;
  c=4;
  fill();

}

function c6()
{
  n=c;
  c=5;
  fill();
}

function c7()
{
  n=c;
  c=6;
  fill();
}

function c8()
{
  n=c;
  c=7;
  fill();
}

function c9()
{
  n=c;
  c=8;
  fill();
}

 function fill()
 {
    var x=document.getElementsByClassName('td1');

      if(x[c].innerHTML=="" && x[n].innerHTML=="O" )
      {
        x[c].innerHTML="X";
        x[c].style.color='black';
        x[c].style.background='lightblue';
        t=t+1;
        descide();
      }

      else if(x[c].innerHTML=="")
      {
        x[c].innerHTML="O";
        x[c].style.color='black';
        x[c].style.background='pink';

        t=t+1
        descide();
      }
}

function descide()
  {
    var b=document.getElementsByClassName('td1');
    var p=document.getElementById('result');
      switch(c)
      {
        case 0:

          if(b[0].innerHTML==b[1].innerHTML && b[1].innerHTML==b[2].innerHTML || b[0].innerHTML==b[3].innerHTML && b[3].innerHTML==b[6].innerHTML || b[0].innerHTML==b[4].innerHTML && b[4].innerHTML==b[8].innerHTML)

              {
                p.innerHTML="winner is \'"+b[0].innerHTML+"\'";
                flag=1;

              }

          break;

        case 1:

          if(b[0].innerHTML==b[1].innerHTML && b[1].innerHTML==b[2].innerHTML || b[1].innerHTML==b[4].innerHTML && b[4].innerHTML==b[7].innerHTML)

              {
                p.innerHTML="winner is \'"+b[1].innerHTML+"\'";
                flag=1;

              }

          break;

        case 2:

          if(b[0].innerHTML==b[1].innerHTML && b[1].innerHTML==b[2].innerHTML || b[2].innerHTML==b[5].innerHTML && b[5].innerHTML==b[8].innerHTML||b[2].innerHTML==b[4].innerHTML && b[4].innerHTML==b[6].innerHTML)

              {
                p.innerHTML="winner is \'"+b[2].innerHTML+"\'";
                flag=1;

              }
        break;

        case 3:

          if(b[3].innerHTML==b[0].innerHTML && b[3].innerHTML==b[6].innerHTML || b[3].innerHTML==b[4].innerHTML && b[4].innerHTML==b[5].innerHTML)

              {
                  p.innerHTML="winner is \'"+b[3].innerHTML+"\'";
                flag=1;

              }

          break;

          case 4:

            if(b[4].innerHTML==b[3].innerHTML && b[4].innerHTML==b[5].innerHTML || b[4].innerHTML==b[0].innerHTML && b[4].innerHTML==b[8].innerHTML||b[1].innerHTML==b[4].innerHTML && b[4].innerHTML==b[7].innerHTML||b[6].innerHTML==b[4].innerHTML && b[6].innerHTML==b[2].innerHTML)

              {
                p.innerHTML="winner is \'"+b[4].innerHTML+"\'";
                flag=1;

              }
          break;

          case 5:

           if( b[3].innerHTML==b[4].innerHTML && b[4].innerHTML==b[5].innerHTML || b[2].innerHTML==b[5].innerHTML && b[5].innerHTML==b[8].innerHTML)

                {
                  p.innerHTML="winner is \'"+b[5].innerHTML+"\'";
                  flag=1;

                }

          break;

          case 6:

           if(b[3].innerHTML==b[0].innerHTML && b[3].innerHTML==b[6].innerHTML || b[6].innerHTML==b[7].innerHTML && b[6].innerHTML==b[8].innerHTML ||b[6].innerHTML==b[4].innerHTML && b[6].innerHTML==b[2].innerHTML )

                {
                  p.innerHTML="winner is \'"+b[6].innerHTML+"\'";
                  flag=1;

                }

          break;

          case 7:

             if(b[1].innerHTML==b[4].innerHTML && b[4].innerHTML==b[7].innerHTML || b[7].innerHTML==b[6].innerHTML && b[7].innerHTML==b[8].innerHTML)

                {
                  p.innerHTML="winner is \'"+b[7].innerHTML+"\'";
                  flag=1;

                }

          break;

          case 8:

            if( b[0].innerHTML==b[4].innerHTML && b[4].innerHTML==b[8].innerHTML ||  b[2].innerHTML==b[5].innerHTML && b[5].innerHTML==b[8].innerHTML||b[7].innerHTML==b[6].innerHTML && b[7].innerHTML==b[8].innerHTML)

                  {
                    p.innerHTML="winner is \'"+b[8].innerHTML+"\'";
                    flag=1;

                  }
        break;

      }

      if(t==9 && flag==0)
        {
          p.innerHTML="GAME DRAW";
          document.getElementById("b1").style.display="block";
        }

      if(flag==1)
      {
       var r=document.getElementsByClassName('td1');
       for(var i=0;i<9;i++)
       {
         if(r[i].innerHTML==""){r[i].innerHTML="  ";}
       }
         document.getElementById("b1").style.display="block";
      }
}