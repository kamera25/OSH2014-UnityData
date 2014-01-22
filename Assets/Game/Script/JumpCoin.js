#pragma strict

function Start () {

}

function Update () {

	if( Input.GetMouseButtonDown(0))
	{
		this.rigidbody.AddForceAtPosition( Vector3.up * 15, Vector3.forward, ForceMode.Impulse);
	}
}