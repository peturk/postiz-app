# Grok media tools in this session

Source of the schemas: this session's live tool list, `tool_definitions.json` for session `01a0d5ec-5d7d-7d90-bee5-319582c44abc`.
Nothing was generated.
No call was made to any media tool.

Four media tools are present.
There is no tool named `video_gen`.

| Tool | Present |
| --- | --- |
| `image_gen` | yes |
| `image_edit` | yes |
| `image_to_video` | yes |
| `reference_to_video` | yes |
| `video_gen` | no such tool |

`image_to_video` and `reference_to_video` are available in this session.
The hypothetical "if video tools are missing, would `features.video_gen` enable them" does not apply here.

## `features.video_gen`

`~/.grok/config.toml` was read in full.
It has no `[features]` table.
It does not set `features.video_gen`.

User guide `26-config-reference.md` documents the key as:

- Key: `features.video_gen`
- Type: `boolean`
- Requirements column: `pin`
- Managed: `user`
- Details: "Enable video tools / `/imagine-video`."

That row does not state the default when the key is unset.
This session already exposes `image_to_video` and `reference_to_video` with the key unset.
A related cap, not a tool, is `tools.media_gen.max_parallel_video_gen_calls` (documented default 4).
The slash command `/imagine-video` is documented as planning shots, generating source images, and animating them with `image_to_video`.

## Shared facts the schemas do not declare

None of the four tools declare a max prompt length.
None declare an `fps` parameter.
None declare an enum constraint in JSON Schema (`enum` is absent).
Allowed values below are the strings the parameter descriptions name.
Where the description and the JSON constraints disagree, both are recorded.

Image inputs do not describe an upload step.
A local file is an absolute filesystem path passed in the argument.
`image_edit` also accepts a user-attachment token.
Video image fields also accept an HTTPS URL or a `data:image/...;base64,...` URL.

Output is not written into the repo.
Each tool returns the saved file's absolute path.
The short name the tool text tells the model to show the user is session-relative:

- Images: `images/<n>.jpg` (example in the schema: `images/1.jpg`)
- Videos: `videos/<n>.mp4` (example in the schema: `videos/1.mp4`)

This session directory is:

`/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d5ec-5d7d-7d90-bee5-319582c44abc/`

`images/` and `videos/` are not in that directory yet.
No generation has run, so the next index and the exact absolute path of a future file were not observed.

## `image_gen`

New image from text.
No source image.

| Parameter | Required | Type | Default | Allowed values in the description |
| --- | --- | --- | --- | --- |
| `prompt` | yes | `string` | none | free text; no max length |
| `aspect_ratio` | no | `string` | `"auto"` | described examples: `1:1`, `16:9`, `9:16`, `3:2`, `2:3`, plus default `auto` |

JSON Schema required: `["prompt"]`.
No `enum`.
No end frame.
No reference images.
No local image input.
No resolution parameter.
No duration.
No fps.

Output: absolute path of a saved image.
Short path shape: `images/<n>.jpg`.

## `image_edit`

Edit or remix existing image(s) through the xAI Imagine API.

| Parameter | Required | Type | Default | Allowed values in the description |
| --- | --- | --- | --- | --- |
| `prompt` | yes | `string` | none | free text; no max length |
| `image` | yes | `array` of `string` | none | one or more references; no max count in the schema |
| `aspect_ratio` | no | `string` | `"auto"` | `1:1`, `16:9`, `9:16`, `4:3`, `3:4`, `3:2`, `2:3`, `2:1`, `1:2`, `19.5:9`, `9:19.5`, `20:9`, `9:20`, `auto` |

JSON Schema required: `["prompt", "image"]`.
No `enum`.

`image` entry, in the priority order the description gives:

1. User-attachment token, exactly as shown, e.g. `[Image #1]`.
2. Absolute filesystem path.
3. `data:image/...;base64,...` URL.

The description does not list an HTTPS URL for `image_edit`.
Single-image edits ignore `aspect_ratio`.
The output matches the input image aspect ratio.
Multi-image edits use `aspect_ratio`, default `auto`.

No end frame.
No video parameters.
No fps.

Output: absolute path of a saved image.
Short path shape: `images/<n>.jpg`.

## `image_to_video`

Video from one source image.
This tool is present.

| Parameter | Required | Type | Default | Allowed values in the description |
| --- | --- | --- | --- | --- |
| `image` | yes | `string` | none | one image |
| `prompt` | no | `string` or `null` | `null` | free text; no max length; omit for an automatic natural animation |
| `duration` | no | `integer` or `null`, format `uint32`, JSON `minimum` 0 | description says 6; no JSON `default` | description says only `6` or `10` seconds |
| `resolution_name` | no | `string` | `"480p"` | `480p` or `720p` |

JSON Schema required: `["image"]`.
No `enum` on `duration` or `resolution_name`.
JSON allows any uint32 at or above 0.
The description narrows duration to 6 or 10.
No `maximum` in the schema.

`image` accepts:

- Absolute filesystem path
- HTTPS URL
- `data:image/...;base64,...` URL

It does not mention a user-attachment token.
One source image only.
No `images` array.
No `first_frame`.
No `last_frame` / end frame.
No `keyframes`.
No `voices`.
No `aspect_ratio` parameter.
No fps parameter.

Output: absolute path of a saved video.
Short path shape: `videos/<n>.mp4`.

## `reference_to_video`

Video from reference images, preset voices, and/or pinned frames.
This tool is present.
There is still no tool named `video_gen`.

| Parameter | Required | Type | Default | Allowed values in the description |
| --- | --- | --- | --- | --- |
| `prompt` | yes | `string` | none | free text; no max length |
| `aspect_ratio` | yes | `string` | none | described: `1:1`, `16:9`, `9:16`, `4:3`, `3:2`, `3:4`, `2:3` |
| `images` | no | `array` of `string` | none | up to 14 |
| `first_frame` | no | `string` or `null` | none | one image, pinned as the exact first frame |
| `last_frame` | no | `string` or `null` | none | one image, pinned as the exact last frame (end frame) |
| `keyframes` | no | `array` of objects | none | up to 4 |
| `voices` | no | `array` of `string` | none | up to 3 preset voice ids |
| `duration` | no | `integer` or `null`, format `uint32`, JSON `minimum` 0 | description says 6; no JSON `default` | description says 1 to 15 seconds |
| `resolution_name` | no | `string` | `"480p"` | `480p` or `720p` |

JSON Schema required: `["prompt", "aspect_ratio"]` only.
The description adds a second constraint that is not in the `required` array.
At least one of `images`, `voices`, `first_frame`, `last_frame`, or `keyframes` must be provided.
No `enum`.
JSON `duration` has `minimum` 0 and no `maximum`.
The description narrows duration to integers from 1 through 15.

`aspect_ratio` is required and is not described as `auto`.
The description's list is shorter than `image_edit`'s list.
It does not name `2:1`, `1:2`, `19.5:9`, `9:19.5`, `20:9`, or `9:20`.

### Image inputs

`images`, `first_frame`, `last_frame`, and each keyframe `image` accept:

- Absolute filesystem path
- HTTPS URL
- `data:image/...;base64,...` URL

They do not mention a user-attachment token.

`images` are style and content references.
They are re-rendered.
They are not literal frames.
Tag them in the prompt as `<IMAGE_i>`.
Index order is upload order: `first_frame`, then `images`, then `keyframes`, then `last_frame`.
With `first_frame` set, the first `images` entry is `<IMAGE_1>`.
Pinned frames do not need prompt tags.

### End frame and extra anchors

`last_frame` is the end frame.
It is the exact last frame of the clip.
`first_frame` plus `last_frame` interpolates between those two images.
The same image in both is described as a perfect loop.

`keyframes` items:

| Field | Required | Type | Notes |
| --- | --- | --- | --- |
| `image` | yes | `string` | appears literally at `timestamp_s` |
| `timestamp_s` | yes | `number`, format `float` | strictly inside the clip: `0 < t < duration` |

Timestamps snap to a 1/3-second grid.
Two anchors closer than 1/3 second are rejected.
Up to 4 keyframes.
Endpoints belong on `first_frame` and `last_frame`, not in `keyframes`.

### Voices

Examples named in the description: `ara`, `eve`, `leo`, `rex`.
Same roster as the xAI text-to-speech API.
An unknown id fails and the error lists the available voices.
The schema does not include the full roster.
Tag them `<AUDIO_0>`, `<AUDIO_1>`, `<AUDIO_2>`.

No fps parameter.

Output: absolute path of a saved video.
Short path shape: `videos/<n>.mp4`.
