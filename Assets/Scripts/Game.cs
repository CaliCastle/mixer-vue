using System;
using JetBrains.Annotations;
using UnityEngine;
using Microsoft.Mixer;
using UnityEngine.UI;

public class Game : MonoBehaviour
{
    public Text text;

    // Initialization
    private void Start()
    {
        // Connect to Mixer
        MixerInteractive.GoInteractive();
        // Listen for interactive button events
        MixerInteractive.OnInteractiveButtonEvent += OnInteractiveButtonEvent;
        MixerInteractive.OnInteractiveTextControlEvent += OnInteractiveTextControlEvent;
    }

    /// <summary>
    ///	When an interactive button event is received.
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    public void OnInteractiveButtonEvent(object sender, InteractiveButtonEventArgs e)
    {
        Debug.Log(e.ControlID + " was clicked.");
        
        e.CaptureTransaction();
    }

    public void OnInteractiveTextControlEvent(object sender, InteractiveTextEventArgs e)
    {
        Debug.Log(e.ControlID + " was typed.");
        
        text.text = e.Text;
    }
}