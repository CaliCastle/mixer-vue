using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Microsoft;
using Microsoft.Mixer;

public class Game : MonoBehaviour {

	// Use this for initialization
	void Start () {
		// Call GoInteractive to connect to the Mixer service so you can start
		// recieving input.
		MixerInteractive.GoInteractive();
	}
	
	// Update is called once per frame
	void Update ()
	{
		if (MixerInteractive.GetButton("GiveHealth"))
		{
			Debug.Log("It's triggered!");
		}
	}
}
