name: Improvement Report
description: File a improvement report
title: ''
labels: ["Improvement"]
assignees: ''
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this improvement report!
  - type: input
    id: contact
    attributes:
      label: Contact Details
      description: How can we get in touch with you if we need more info?
      placeholder: ex. email@example.com
    validations:
      required: false
  - type: dropdown
    id: improvement-type
    attributes:
      label: Improvement Type
      description: What improvement type do you need?
      options:
        - new kpi
        - new requirement
    validations:
      required: true
  - type: textarea
    id: which-needs
    attributes:
      label: which are your needs?
      description: Also tell us, which are you needs and wants regarding Mantra?
      placeholder: Tell us what you see!
      value: "A bug happened!"
    validations:
      required: true
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](https://example.com)
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
