&NewLine;

If VMs need to access local NAS storage, you need to [create a network bridge]({{< ref "ContainerNASBridge" >}}) and assign it to the VM.
Applications or sandboxes that need access to local storage within the container must use a bridge or mount a local storage location as a host path for the application.
