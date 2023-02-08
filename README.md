# Aplicación base de Ionic (con sidemenu) haciendo uso de Admob

Es una aplicación vacía de Ionic (sidemenu) con Admob ya configurado para directamente configurar id de aplicación e id de anuncios.

#### Google tiene sus propios IDs de anuncios de prueba, son los que uso en este proyecto:
https://developers.google.com/admob/android/test-ads

## Configuración de ID de Aplicación en AndroidManifest.xml
```
        <meta-data
            android:name="com.google.android.gms.ads.APPLICATION_ID"
            android:value="@string/admob_app_id"/>
```

## Configuración en strings.xml
```
<string name="admob_app_id">ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX</string>
```