---
title: Reversing a sussy browser downloader
date: 14/05/2023
pin: true
---
# Reversing a sussy browser downloader
It all started when a friend of mine sent in his discord server the download link for a browser downloader made by a windows modding groud that I won't name here (for now). I tried it in a sandbox (sussy baka) and I realized it was a CUI (Command User Interface), which made me think how much effort they could've put in a so simple program.

## The beginning
I opened Detect It Easy and dragged that file in. It was a windows CAB file, a.k.a an IExpress package. I knew something about it, which helped me a lot, but, for the time being I decided to just extract it. It didn't take much because, being it just a package, it contains alla original files and opening it is a breeze: open a powershell and type `[file] /T:"$(pwd)\ExtractedFiles /C"` and it will be extracted.

## The discovery
What I found wasn't too surprising: there was a batch file (wich I thought of, being it a CUI), two executables (bg.exe and relocate.exe), and the whole winget package.

Soon, I realized it wouldn't be easy to decompile the two suspect executables. Because of that I just uploaded them to VirusTotal. The results were not so shocking, they were copied from RMenu 5, a batch menu maker.

![First weird thing](/images/bg_vt.png)![Second weird thing](/images/relocate_vt.png)

## Looking into the code
The code was just messy. It was difficult to analyze at first, but after understanding the structure it soon got better to look at. It:
1. Initializes the shell, with all the variables and visual properties
2. Check if it is privileged and, if not, it drops a vbs file in the temp directory to ask for privileges (sussy baka), executes it and then deletes it.
3. Since, for now, nothing would be displayed on the screen, it prints the main menu, using the executables from above for the graphics. ![The main menu](/images/main_menu.png)
4. It does stuff depending on the chosen option
### Chromium based
It presents the user with: 
- Chrome
- Ungoogled Chromium
- Brave
- Edge (NOT RECOMMENDED)

Clicking every option, other than edge, would just download the chosen browser.

If you unfortunately want Microsoft's new chromium-based browser, you just can't: it presents you with:
- A confirmation (with yes or no)
- Another confirmation of a PERMANENT installation (with no or yes)
- A special offer of Chrome (with a horrible ascii Yes and a no)
- Another confirmation, which states "Confirm a bad decision" (with a no and another no, that take you to the main menu anyway)

## Firefox based
It presents the user with:
- Firefox
- Waterfox (I didn't even know it esists)

Notably, Waterfox can be downloaded in new and old version, noice!

P.S: moving from a menu to another takes literally three years


