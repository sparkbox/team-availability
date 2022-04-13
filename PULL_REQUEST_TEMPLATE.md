### Description
<!-- Add description of work done here -->

### Spec

Designs: [Designs](DESIGN_URL)

See Story: [ISSUE_NUMBER]((https://sparkbox.atlassian.net/browse/FSA22V1-ISSUE_NUMBER))

### Validation
<!-- Delete anything irrelevant to this PR -->

* [ ] This PR has visual elements, so it was reviewed by a designer.
* [ ] This PR has code changes, and our linters still pass.
* [ ] This PR affects production code, so it was browser tested (see below).
* [ ] This PR has new code, so new tests were added or updated, and they pass.
* [ ] This PR has new SCSS functions, mixins, or variables, so [Sass Tests](https://seesparkbox.com/foundry/how_and_why_we_unit_test_our_sass) were added or updated, and they pass.
* [ ] This PR has copy changes, so copy was proofread and approved.
* [ ] The content of this PR requires documentation, so we added a detailed description of the component's purpose, requirements, quirks, and instructions for use by designers and developers. Along with accessibility information if pertinent.
* [ ] Changes are browser tested. This includes functionality, accessibility, responsiveness, and design.

#### To Validate

1. Make sure all PR Checks have passed (GitHub Actions, CircleCI, Code Climate, Snyk, etc).
2. Pull down all related branches.
3. Confirm all tests pass.
<!-- Add additional validation steps here -->

<!--
For an example of good validation instructions, check out Bryan's Bouncy Ball PR at https://github.com/sparkbox/bouncy-ball/pull/56#issue-192153701.
-->

---

#### Browser Testing
<!--
The browser list should be tailored to specific engagement and client needs.
Delete if irrelevant to this issue
-->

#### Gold Level Support

In these browsers, behavior & design closely match original specifications. A user is able to access all content and functionality, including the usability of required assistive devices, such as keyboard and screenreader.

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
