Real-time Lip Sync for MetaHuman and Custom Characters (with TTS and Chatbots)
This tutorial guides you through setting up automatic lip sync for MetaHuman and custom characters using Runtime MetaHuman Lip Sync plugin. You'll learn how to: Configure the plugin with MetaHuman characters Process audio from various sources (microphone, TTS, audio files) Integrate lip sync with existing animation systems Apply the system to custom characters The plugin generates visemes (visual phonemes) from audio input and animates character lips accordingly. It works with MetaHumans, Daz Genesis, CC3/CC4, Mixamo, ReadyPlayerMe avatars, and any character with facial morph targets. Prerequisites: Runtime MetaHuman Lip Sync, Runtime Audio Importer, and optionally Runtime Text To Speech or Runtime AI Chatbot Integrator for TTS capabilities.
Georgy Dev
-
Georgy Dev
4월 17, 2025•마지막 업데이트: 8월 19, 2025•
커뮤니티
Fab
MetaHuman: 5.0-5.5, 5.6
UE 5.0 - 5.6
자신만의 커뮤니티 튜토리얼을 만들고 싶으신가요? 튜토리얼 만들기
Real-time Lip Sync for MetaHuman and Custom Characters (with TTS and Chatbots)
Note: This tutorial provides simplified setup instructions for quick implementation. For comprehensive documentation and advanced features, please refer to the full documentation. Visit the product website for more information and demos.

This tutorial will guide you through setting up automatic, realtime, offline lip sync animation for both MetaHuman and custom characters using the Runtime MetaHuman Lip Sync plugin.

Realistic model with MetaHuman character
Realistic model with MetaHuman character
Standard model with MetaHuman character
Standard model with MetaHuman character
Prerequisites
Before starting this tutorial, you'll need:

Runtime MetaHuman Lip Sync - The core plugin for lip sync functionality

Runtime Audio Importer - Required for processing audio input

MetaHuman plugin enabled in your project (for MetaHuman characters)

Optionally: Runtime Text To Speech or Runtime AI Chatbot Integrator if you need text-to-speech capabilities

What You'll Learn
How to set up real-time lip sync for MetaHuman characters

How to configure audio input from various sources (microphone, text-to-speech, audio files)

How to integrate lip sync with existing animation systems

Brief overview of using the plugin with custom non-MetaHuman characters

Runtime MetaHuman Lip Sync for Unreal Engine – Offline & Real-Time Lip Sync with Audio & TTS

Runtime MetaHuman Lip Sync Plugin – Demo Project Walkthrough
Setting Up MetaHuman Lip Sync
Step 1: Locate and Modify the Face Animation Blueprint
The default MetaHuman face Animation Blueprint is located at:

Content/MetaHumans/Common/Face/Face_AnimBP

You have three options:

Edit the default asset directly (affects all MetaHumans)

Duplicate the asset and redirect your character to use the duplicate

Use a custom Animation Blueprint with access to facial bones

For this tutorial, we'll edit the default asset for simplicity.

Step 2: Event Graph Setup
Open your Face Animation Blueprint and switch to the Event Graph

Add an Event Blueprint Begin Play node if it doesn't exist

Add the Create Runtime Viseme Generator node and connect it to Begin Play

Save the output as a variable named "VisemeGenerator"

Step 3: Set Up Audio Input Processing
You need to choose a method to process audio input. Here are some common approaches:

Microphone Input (Real-time)
To perform lip sync in real-time while speaking:

Create a Capturable Sound Wave using Runtime Audio Importer

Bind to the OnPopulateAudioData delegate

In the bound function, call ProcessAudioData from your Runtime Viseme Generator

Start capturing audio from the microphone

Text-to-Speech Input
To generate speech from text and perform lip sync:

Use Runtime Text To Speech (or Runtime AI Chatbot Integrator for ElevenLabs or OpenAI) to generate speech from text

Import the synthesized audio with Runtime Audio Importer

Bind to the OnGeneratePCMData delegate of the imported sound

In the bound function, call ProcessAudioData from your Runtime Viseme Generator

Play the imported sound wave

Text-to-Speech (Local)
Text-to-Speech (Local)
Text-to-Speech (External APIs) - ElevenLabs or OpenAI
Text-to-Speech (External APIs) - ElevenLabs or OpenAI
Audio File/Buffer Input
To use pre-recorded audio files for lip sync:

Import an audio file/buffer with Runtime Audio Importer

Bind to the OnGeneratePCMData delegate

In the bound function, call ProcessAudioData from your Runtime Viseme Generator

Play the imported sound wave

Step 4: Anim Graph Setup
Now switch to the Anim Graph to connect the viseme generator to the character's animation:

Locate the pose that contains the MetaHuman face (typically from Use cached pose 'Body Pose')

Add the Blend Runtime MetaHuman Lip Sync node

Connect the pose to the Source Pose input

Connect your VisemeGenerator variable to the Viseme Generator pin

Connect the output to the Result pin of the Output Pose

Step 5: Combining with Body Animations (Optional)
If you want to apply lip sync alongside existing body animations:

Add a Layered blend per bone node between your body animations and the final output

Configure the layer setup with these branch filters:

FACIAL_C_FacialRoot

FACIAL_C_Neck2Root

FACIAL_C_Neck1Root

Connect existing animations to Base Pose, facial animations to Blend Poses 0, and the output to Result

Configuration Options
The Blend Runtime MetaHuman Lip Sync node has several configuration options:

Interpolation Speed (Default: 25) - Controls transition speed between visemes

Reset Time (Default: 0.2s) - Duration after which lip sync resets when audio stops

Using with Custom Characters
While this tutorial focuses on MetaHuman, the plugin works with many custom character types:

Daz Genesis 8/9 characters

Reallusion Character Creator 3/4 (CC3/CC4) characters

Mixamo characters

ReadyPlayerMe avatars

Any character with morph targets for facial expressions

For custom characters, you'll need to:

Create a custom pose asset mapping your character's morph targets to the plugin's viseme system

Follow the same audio setup process as with MetaHuman

Use your custom pose asset in the Blend Runtime MetaHuman Lip Sync node

Standard model with custom character
Standard model with custom character
Standard model with custom character
Standard model with custom character
For detailed instructions on setting up custom characters, including viseme mapping references for all supported standards, please refer to the full documentation.

Conclusion
You now have a working lip sync system for your MetaHuman characters! The plugin handles the complex work of analyzing audio and generating appropriate visemes, allowing your characters to speak naturally with minimal setup.

For additional help or custom development solutions, contact solutions@georgy.dev or join the Discord support server.

카테고리:캐릭터 & 애니메이션
산업:시각화게임Virtual Production
