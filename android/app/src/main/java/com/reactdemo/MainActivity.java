package com.reactdemo;
import android.os.Bundle; // here
// react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen; // here
// react-native-splash-screen < 0.3.1
// import com.cboy.rn.splashscreen.SplashScreen; // here

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
   @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  
        super.onCreate(savedInstanceState);
    }

    @Override
    protected String getMainComponentName() {
        return "ReactDemo";
    }
}
