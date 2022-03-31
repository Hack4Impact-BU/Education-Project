# Outline for Super Admin - All Tutors Table

Result # | Original Reg Date | Tutor Last Name | Manager/Admin | Verification Status | Current Step

 - Result # - database id
 - Original Reg Date - YYYY-MM-DD HH:MM:SS
 - Tutor Last Name: JSON object with: 
    - First Name
    - Last Name
    - Tutoring Grade Levels
    - Subject
    - TimeZone
    - Language
    - Link to Contact Card
 - Manager/Admin: Link Manager names?
 - Verification Status: Y/N
 - Current Step: ?

Notes:
  - Tutor Last Name Column --> Expand into multiple columns:
    - First Name: str
    - Last Name: str
    - Tutoring Grade Levels: array of ints
    - Subject: array of strs
    - Time Zone: GMT ±int
    - Language: lang code
    - Link to contact card
 - Manager/Admin --> Link manager profile, doesn't have to be full, can be partial and include link to manager contact card, etc.
