# Building Progressive Web Applications with Vue.js

**Reliable, Fast, and Engaging Apps with Vue.js**

Building Progressive Web Application with Vue.js provides readers with necessary tools for developing a progressive web application (PWA). PWAs behave like a regular website and have similar structure to that of a web application. PWAs also have three additional extensions—a manifest file, an app icon, and service workers. Vue.js is a progressive framework for building user interfaces.

In each chapter, we are going to progress by building a library system, where we can manage our personal book library in a comfortable and portable manner. The book starts by explaining the concept of PWAs, its structure, and moves on to designing the App Shell and other features that distinguish a PWA from simple web pages. In the following chapters, the book deals with continuously evolving enriched web technologies such as Service Workers, Caching Strategies. Features that make PWAs powerful—such as Background Sync, Push Notification—are also covered in the last chapters.

Continuously evolving enriched web technologies (such as Service Workers) has allowed for development of sophisticated apps for mobile devices and extended these features to PWAs (i.e., web apps that feel like apps downloaded from app stores). This book addresses the vital need to study this technology and learn a little bit more about it.

You can get the book [here](https://www.apress.com/us/book/9781484253335)

## What You Will Learn

- Harness of the power of Vue.js to build PWAs.
- Understand the function and relevance of the Web Manifest File.
- Discover service worker and why it is revolutionary.
- Work with Cache API and caching strategies.
- Use IndexedDB, background sync, and push notifications.
- Enhance your apps with Firebase.
- Implement the Workbox library in your apps.

## Table of Contents

### Chapter 1: Making Your First Progressive Web App
- What Is a PWA? 
- Why Build a PWA? 
- What Is the Structure of a PWA? 
- Getting Started 
- NodeJS 
- npm
- Google Chrome 
- Chrome DevTools
- Lighthouse
- Vue
- Vue CLI                                                                                                            
- Material Design                                                                                              
- Vuetify                                                                                                             
- Workbox                                                                                                          
- Firebase                                                                                                          
- Firebase Hosting                                                                                             
- Firebase Database                                                                                          
- Firebase Cloud Messaging                                                                             
- Git                                                                                                                   
- Visual Studio Code                                                                                          
- The App Shell Model                                                                                            
- Our App                                                                                                                
- Building Our Manifest                                                                                     
- Creating Our Service Worker                                                                          
- Summary


#### Getting Started

```
$git checkout v1.0.1
```

#### Vuetify Ready

```
$git checkout v1.0.2
```

#### Web Manifest Ready

```
$git checkout v1.0.3
```

#### Service Worker Ready

```
$git checkout v1.0.4
```


### Chapter 2: Web App Manifest                                                              
- Creating Our Manifest                                                                                          
- name                                                                                                              
- short_name                                                                                                    
- theme_color                                                                                                   
- background_color                                                                                          
- description                                                                                                      
- display                                                                                                            
- orientation                                                                                                     
- scope                                                                                                              
- start_url                                                                                                          
- icons                                                                                                               
- The Final Manifest                                                                                               
- Linking Our Manifest in Our App                                                                          
- Debugging Our Web App Manifest                                                                       
- Summary                                                                                                             

### Chapter 3: Service Workers                                                                 
- What Is a Service Worker?                                                                                   
- Understanding the Life Cycle                                                                               
- Adding a Service Worker to an App                                                                      
- Core Technologies                                                                                                
- Promises                                                                                                         
- Fetch API                                                                                                         
- Cache                                                                                                              
- Debugging Our Service Worker                                                                            
- Summary                                                                                                             

### Chapter 4: Caching Strategies                                                             
- When to Store Information                                                                                   
- When to Update Files in the Cache                                                                      
- Responding to Requests                                                                                      
- cacheFirst                                                                                                       
- cacheOnly                                                                                                       
- networkFirst                                                                                                   
- stale-while-revalidate                                                                                    
- Updating Our App                                                                                                 
- Summary                                                                                                             

### Chapter 5: Working with Vue js                                                           
- What Are the Major Features of Vue js?                                                               
- What Are Components?                                                                                        
- What Are the Life Cycle Hooks in a Component?                                                 
- beforeCreate                                                                                                   
- created                                                                                                           
- beforeMount                                                                                                   
- mounted                                                                                                         
- beforeUpdate                                                                                                  
- updated                                                                                                          
- beforeDestroy                                                                                                 
- destroyed                                                                                                        
- Communicating between Components                                                                
- What Are Props?                                                                                             
- What Is a ref attribute?                                                                                   
- Emitting an Event                                                                                           
- Using Two-way Data Binding                                                                          
- What Is Vue Router?                                                                                       
- Building VueNoteApp                                                                                            
- Creating Notes                                                                                                
- Adding a Form                                                                                              
- Deleting a Note                                                                                             
- What Is the PRPL Architecture Pattern?                                                             
- The Main Entry Point                                                                                    
- The App Shell                                                                                                
- Fragments Loaded with Lazy Loading                                                          
- Adding a Router                                                                                            
- Adding Firebase                                                                                            
- Summary                                                                                                           

### Chapter 6: IndexedDB                                                                        
- What Is IndexedDB?                                                                                           
- Using IndexedDB                                                                                                
- Opening a DB                                                                                                     
- Initiating Read/Write in the Object Store                                                            
- Deleting from the Object Store                                                                          
- Using IndexedDB in VueNoteApp                                                                        
- Summary                                                                                                           

### Chapter 7: Background Sync                                                             
- Using Background Sync                                                                                     
- SyncManager                                                                                                     
- Event Tags                                                                                                    
- Obtaining the Event List                                                                               
- Obtaining the Last Chance of an Event                                                         
- Using Background Sync in VueNoteApp                                                       
- Summary                                                                                                           

### Chapter 8: Push Notifications                                                            
- What Is a Push Notification?                                                                              
- Push API                                                                                                             
- Notifications API                                                                                                 
- Asking for Permission                                                                                  
- Creating a Notification                                                                                  
- Using Push Notifications in VueNoteApp                                                            
- Configuring the App                                                                                      
- Adding a Push Notification                                                                           
- Running the App                                                                                           
- Summary                                                                                                           

### Chapter 9: Publishing                                                                        
- Adding Firebase Authentication                                                                         
- Sending to Firebase Hosting                                                                              
- Final Thoughts

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
