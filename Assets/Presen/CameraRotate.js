#pragma strict

private var degree: int = 0;
private var nowdegree : int = 0;

function Start () {

}

function Update () {
	if( Input.GetMouseButtonDown(0))
	{
		degree += 90;
	}
	
	
	if( nowdegree < degree){
		 this.transform.Rotate( 0, 2, 0);
		 nowdegree += 2;
	}
}