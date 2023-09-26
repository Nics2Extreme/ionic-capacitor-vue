"# Ionic Capacitor Vue" 

Fast Food Ordering Application Installation Process
We will be needing:
	Ionic VSCode Extension
	Android Studio

Upon download, open the directory in VSCode. We need to install the node_module dependencies;
running the command on the terminal:

	npm install

Testing the Web View
Once you have the Ionic extension, navigate to it (usually found on the left panel).
We can then view some options such as Run, Debug, Project etc. To run the web view,
simply click on the Web option under the Run or open a terminal and simply type in:

	npm run dev

It will display a link (localhost) on where the app is running. We then open the 
link on your prefered browser.

Testing the Native Application
Having Android Studio pre-installed, we go back to the Ionic extension and under the
Project option, we will first build the app by clicking Build and waiting to finish.

Upon completion, we then click the Open in Android Studio under the Project option.

We can test the app in a AVD or an actual device. To test on an AVD, we need to 
create a virtual device in Android Studio, running and selecting the device and 
clicking Run to start installing the app on the AVD. 

To install the app on a physical device, we need to configure the device to developer mode,
creating a wired/wireless connection to the device and to Adnroid Studio, the device will
be automatically read by AS if configured properly. We then hit run and the app will begin
installation on the device. Enjoy!
