# Sparkbox Team Availability

## Getting Started

1. Clone the repo to your local machine.
1. Install all required dependencies `npm i`.
1. Start the development development server `npm run dev`.
1. Project is now running at [http://localhost:3000](http://localhost:3000) 

## Development 

### PR Process 

1. Create a new branch consistent with the [Sparkbox git standard](https://github.com/sparkbox/standard/blob/main/code-style/git/README.md).  
1. Publish your local branch to GitHub.
1. Open a PR and assign a reviewer when your branch is ready.
1. All tests and all linting checks must pass before a PR can merge.
1. Before merging make sure your branch is caught up to `main`. See [Sparkbox git standard](https://github.com/sparkbox/standard/blob/main/code-style/git/README.md#rebasing-a-branch-onto-the-master-branch).   
1. **Verified** commits are required! see [Sparkbox standard](https://github.com/sparkbox/standard/blob/6127cbeedccf12b4c34bc5b0bfec3f721b765d3e/security/security_policy_compliance/verified-commits.md).

### Deployments 

When new code is pushed to `main` a new deployment is automatically deployed via Netlify to https://fellowship-availability.netlify.app. Additionally, preview deployments are automatically generated for each PR. On each PR look for a comment from Netlify for a link to the preview. Previews will automatically update when new commits are pushed to an open PR.

### Available Scripts

| Script | Description |
| ------- | ------- |
| `npm run dev` | Run the development server |
| `npm test` | Run all tests |
| `npm run lint` | Lint all JavaScript and Sass/CSS |
| `npm run lint:js` | Lint only JavaScript |
| `npm run lint:css` | Lint all Sass/CSS |
| `npm run build` | Build the project for production |
| `npm start` | Start the production build |


### Team Member Data 

Data for each team member is represented in a JSON object. Each data object should contain the following properties. 

| Property | Type | Status | Description |
| ------- | ------- | ------- | ------- |
| `firstName` | `string` | **required** | team member's first name |
| `lastName` | `string` | **required** | team member's last name |
| `suffix` | `string` | optional | team member's name suffix, if they have one |
| `nickname` | `string` | unused | team members's nickname, if they have one |
| `department` | `string` | unused | |
| `jobTitle` | `string` | **required** | team member's job title |
| `role` | `"Developer" \| "UX"  \| "FED" \| "Designer" \| "PM" \| ""` | **required** | used to assign a team member to a matching filter. **CAUTION** Adding additional roles will affect design in potentially unstable ways |
| `techLead` | `boolean` | unused | is team member able to serve as a tech lead |
| `skillLevel` | `number` | unused | |
| `active` | `boolean` | unused | |
| `cohortLeader` | `string` | optional | cohort team member is leader of, if they lead one | 
| `cohortParticipant` | `string` | optional | cohort team member is participant in |
| `internalResponsibility` | `string[] ` | unused | |
| `discoveryLead` | `boolean` | unused | |
| `certifications` | `string[]` | optional | team member's certifications, if they have any. `string[]` can be optionally substituted with a `string` of comma separated values *ex* `"PMP, PSM"` |
| `bio` | `string` | optional | team member's bio |
| `funFacts` | `string[]` | **required** | fun facts about the team member. can be [] if none |
| `technologies` | `string[]` | optional | technologies a team member is proficient in. `string[]` can be optionally substituted with a `string` of comma separated values *ex* `"JavaScript, HTML, CSS` |
| `expertise` | `string[]` | optional | technologies or skill sets a team member has expertise in. `string[]` can be optionally substituted with a `string` of comma separated values *ex* `"JavaScript, HTML, CSS` |
| `strengths` | `string[]` | optional | team member's strengths. `string[]` can be optionally substituted with a `string` of comma separated values *ex* `"JavaScript, HTML, CSS` |
| `interests` | `string[]` | optional | team member's interests. `string[]` can be optionally substituted with a `string` of comma separated values *ex* `"JavaScript, HTML, CSS` |
| `currentProjects` | `project[]` | optional | current projects the team member is on. [See Below for project data specification](#project-data) |
| `pastProjects`| `string[]` | **required** | past projects a team member has worked on |
| `photo` | `string` | **required** | url of team member's photo |
| `weeklyCapacity` | `number` | **required** | weekly capacity of maximum billable hours for a team member |
| `forecastedHours` | `number[]` | **required** | forecasted weekly billable hours for a team member per week |
| `pto` | `number` | unused | |


#### Project Data

Data for each project is represented in a JSON object. Each data object should contain the following properties. 

| Property | Type | Status | Description |
| ------- | ------- | ------- | ------- |
| `client`| `string`| **required** | name of client |
| `project` | `string`| **required** | name of project |
| `startDate` | `"YYYY-MM-DD"`|  **required** | date of project start *ex* `"2021-04-12"` | 
| `endDate` | `"YYYY-MM-DD"`|  **required** | date of project end *ex* `"2021-04-12"` | 


### Browser Testing
<!--
The browser list should be tailored to specific engagement and client needs.
Delete if irrelevant to this issue
-->

#### Gold Level Support

In these browsers, behavior & design closely match original specifications. A user is able to access all content and functionality, including the usability of required assistive devices, such as keyboard and screen-reader.

**macOS**

* [ ] Safari (last 2 major versions)
* [ ] Chrome (last 6 months)
* [ ] Firefox (last 6 months)

**Windows**

* [ ] Chrome (last 6 months)
* [ ] Firefox (last 6 months)
* [ ] Edge 18 (last 6 months)

**Mobile**

* [ ] Safari (last 2 major versions)
* [ ] Android (last 2 Android versions)
* [ ] Samsung Browser (last year)
* [ ] Chrome (last 6 months)
* [ ] Firefox (last 6 months)

#### Silver Level Support

In these browsers, behavior & design are acceptable, but may not be as originally intended. A user is still able to access all content and functionality as described.

* [ ] Android
* [ ] Safari (last 4 major OS versions)
* [ ] Edge 18
* [ ] Samsung Browser (last 3 years)

#### Bronze Level Support

In these browsers, behavior & design may not be great, but the content doesn't appear "broken" to the user, either. All content is accessible, and functionality is as described. Additional testing may be required during implementation.

* [ ] IE 11
