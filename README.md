# UFOs

#### Overview
Across the globe, there have been many reports of UFO sightings, which some believe could be extra-terrestrials visiting Earth from other worlds. The purpose of the UFO Finder web page is to allow users to filter the available data of UFO sightings and display a table of the filtered data. This makes it easy for the user to find specific sightings in the data, possibly to see how many and what kind of UFOs have been spotted a local area.

#### Results
The UFO Finder successfully filters and displays the data based on the arguments the user passes to the input fields. The results are displayed once the user clicks anywhere on the page after entering the filter criteria. By default, the sightings are sorted by date. 

![Filtered Data Table](https://github.com/veachk90/UFOs/blob/main/Screenshot%20(152).png)

#### Summary
Although the UFO Finder web page is a neat, and potentially useful, tool, it leaves room for improvement. One drawback is that the formats of the placeholder values in the input fields are not acceptable if the user enters them exactly as shown. That is, City, State, Country, and Shape are all shown as being capitalized. However, as the page currently is, the inputs must actually all be lower case. It would be an improvement to have the page accept any entry, regardless of capitalization. A simple way to solve this problem would be to build a function in the app_challenge.js file that converts the string characters to all lower case, then passes the converted strings to the filter. 

The summary addresses two additional recommendations for further development
One recommendation I would like to see that would greatly improve the functionality of the page would be to allow user to submit future sightings of their own for review. Then, if the sighting could be corroborated or verified, it could be added to the data set. It would also likely increase traffic to the web page and attract more UFO enthusiasts. 

Another recommendation would be to review the existing data. As it is, there are entries with notes that indicate they were fake or otherwise proven to be false sightings. It would be better to have an additional column in the table that showed whether a particular sighting was a fake or not, and then using this column as an added filter. Thus, a user could filter to exclude any proven fake UFO sightings. 
