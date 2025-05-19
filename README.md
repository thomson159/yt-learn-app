# yt-learn-app

A mobile app built with **Expo + React Native + Expo Router** for browsing and watching educational YouTube videos.  
The app allows users to search, sort, and view video content in a user-friendly interface.

## 🚀 Tech Stack

- **React Native** (v0.79.2)
- **Expo** (SDK 53)
- **Expo Router** (v5)
- **Styled Components**
- **YouTube API** (via Axios)
- **React Navigation**
- **TypeScript**

## 📦 Setup

1. **Install dependencies**

```bash
npm install
```

2. **Run the project (READ INFO BELOW BEFORE RUN!)**

```bash
npx expo start
```

⚠️ Any problems? Check [Expo Documentation](https://docs.expo.dev/).

# ⚠️ PLEASE READ IT CAREFULLY !

## 1. react-native-video

⚠️ WARNING: `react-native-video` doesn't work with `npx expo start`

Render the Video component only on supported platforms (web, iOS, Android). This prevents the app from crashing during Expo Go or other environments where the Video component might cause issues. When built for the target platforms (web, iOS, Android), the component will work correctly.

⚠️ If you want to build an app, go to: `./app/video.tsx` and uncomment changes.

## 2. YT Api

⚠️ In its current state the app is set to mock data and not real data from YT API to make testing easier.

### 2.1. Appropriate imports

⚠️ If you want to run the application on real data from yt go to: `./hooks/useFetchVideos.tsx`, `./hooks/useSearchVideos.tsx`, `./hooks/useFetchVideoStats.tsx` and use the appropriate imports.

### 2.2. Add your `YOUTUBE_API_KEY` in `config.ts`

## 🔗 Useful Links

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router Documentation](https://expo.github.io/router/docs)
- [YouTube Data API v3](https://developers.google.com/youtube/v3)
- [Styled Components Docs](https://styled-components.com/docs)
- [React Navigation Docs](https://reactnavigation.org/docs/getting-started)
- [AsyncStorage for React Native](https://react-native-async-storage.github.io/async-storage/docs/install/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Material Icons](https://material.io/resources/icons/)
- [Axios GitHub](https://github.com/axios/axios)

## 📝 Assumptions for the project

### Required:

✅ Main screen with 4 categories (React Native, React, Typescript, Javascript), horizontally scrollable lists, "Show more" button redirecting to search screen.

✅ Video search screen with working search engine.

✅ Video details screen with description

⚠️ Video details screen with video player (react-native-video), mini and fullscreen player modes.
Testing the Video component was very challenging for me, as I only have a Lenovo computer running Ubuntu where I wrote the code, and an iPhone 13 Pro on which I tested the app.

✅ Privacy Policy link on the login screen.

### Optional:

✅ Sorting search list (latest, oldest).
⚠️ (most popular) - Sorting by 'Most popular' was commented out because it would require changes to the API logic, and implementing it was optional for the task.

❌ Settings screen with notifications.

✅ Notes for videos saved locally.

## 🛠️ TODO

1. Used MaterialIcons instead of custom icons from assets for faster development. Can replace with custom SVG icons from assets later for better branding and design.

2. Consider adding a loading animation for better UX while waiting for API data reload.

3. Sorting is currently done only on the frontend. Consider implementing sorting via API for better performance with large datasets.
   ⚠️ Fix (most popular) sorting.

4. Welcome view was quickly implemented as a popup. It would be better to make it a dedicated start screen so that the API and app data don't load in the background until the user clicks "Log in as guest".

5. Move YOUTUBE_API_KEY to environment variables (.env) for easier management and security.

6. Match file extensions, use `.tsx` and `.ts` respectively.

7. Theme system is not finished yet and requires further development and refinement.

8. Unit tests

9. Spash screen, logo, app name itp...
