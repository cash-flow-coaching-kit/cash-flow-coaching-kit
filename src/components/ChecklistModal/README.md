# Checklist Modal

Component used primarily within the Change Levers page to allow the user to add items to the action checklist.

## Component structure

```
.
+-- Open Modal Button
+-- Modal
|   +-- Modal Title
|   +-- Subtitle
|   +-- Form
|   +-- Divider
|   +-- { children }
|   +-- Modal Actions
```

## Usage

```jsx
<ChecklistModal
	container="<PossibleActionType>"
	title="<string>"
	subtitle="<string>"
>
	// Things to consider
</ChecklistModal>
```
