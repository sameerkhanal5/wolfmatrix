## Title: KIC App Progressive Programs Feature
Type: Epic

### Description:
The Progressive Programs feature in the KIC app is designed to guide users through a predefined series of activities, enhancing their learning journey. This feature allows registered paying users to engage with programs that cater to their interests and goals, offering a structured path towards achieving their objectives.

### Acceptance Criteria:

- Users can view a list of programs available in the app, facilitated by the ProgramService.
- Upon selecting a program, users are presented with a detailed program overview and schedule on the program detail page, divided into two sections: Overview and Schedule.
    
    - The Overview section provides detailed information about the program.
    - The Schedule section displays the user's scheduled activities for the program if enrolled, prompting enrollment otherwise.
    
- Users can enroll in a program by selecting the number of days per week and specific weekdays for participation. The system adjusts the activities based on the selected days.
- After enrollment, users can view their program schedules within the program schedule page and on the Planner screen, which aggregates schedules and activity logs from all enrolled programs.
- The system automatically reschedules missed activities to the next selected activity day.
- If a user completes a future activity, the system considers previous unfinished activities as skipped.
- Users can only be actively enrolled in one program at a time across all program selections.
- Users have the capability to pause and resume activities.

### Solution Design Requirements:

- Implement functionality for users to enroll in a program, specifying the days of the week they wish to participate.
- Provide a detailed view of enrolled programs, including program descriptions and schedules.
- Integrate a Planner screen to display past activities and future schedules for all enrolled programs.
- Handle activity completion, including marking activities as completed, rescheduling missed activities, and automatically marking previous unfinished activities as skipped upon completion of a future activity.
- Allow users to pause and resume activities within a program.

### Rough Solution Overview:

- Utilize the ProgramService to fetch a list of programs for user selection.
- Implement a program detail page with Overview and Schedule sections for displaying program information and schedules.
- Use the ProgramSelectionService for handling program enrollment, including adjusting activities based on user-selected days of the week.
- Develop the Planner screen to aggregate schedules and activity logs from all enrolled programs.
- Integrate the ActivityCompletionService to manage activity completion, including rescheduling, marking as skipped, and pausing/resuming activities.

### Additional Considerations:

- Ensure users can only be actively enrolled in one program at a time.
