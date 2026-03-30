import torch
import numpy as np
from PIL import Image, ImageOps
import folder_paths


class ComfyUIPascalEditor:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "width": ("INT", {"default": 1024, "min": 1, "max": 4096, "step": 1}),
                "height": ("INT", {"default": 1024, "min": 1, "max": 4096, "step": 1}),
            },
            "hidden": {
                "image": ("STRING", {"default": ""}),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("image",)

    FUNCTION = "run"

    OUTPUT_NODE = True

    CATEGORY = "PascalEditor"

    def run(self, width=1024, height=1024, image="", **kwargs):
        if not image:
            return (torch.zeros(1, height, width, 3),)

        image_path = folder_paths.get_annotated_filepath(image)
        i = Image.open(image_path)
        i = ImageOps.exif_transpose(i)
        if i.mode != "RGB":
            i = i.convert("RGB")

        if i.width != width or i.height != height:
            src_ratio = i.width / i.height
            dst_ratio = width / height

            if src_ratio > dst_ratio:
                new_w = int(i.height * dst_ratio)
                left = (i.width - new_w) // 2
                i = i.crop((left, 0, left + new_w, i.height))
            elif src_ratio < dst_ratio:
                new_h = int(i.width / dst_ratio)
                top = (i.height - new_h) // 2
                i = i.crop((0, top, i.width, top + new_h))

            i = i.resize((width, height), Image.LANCZOS)

        image_np = np.array(i).astype(np.float32) / 255.0
        image_tensor = torch.from_numpy(image_np)[None,]

        return (image_tensor,)


NODE_CLASS_MAPPINGS = {
    "ComfyUIPascalEditor": ComfyUIPascalEditor
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "ComfyUIPascalEditor": "Pascal Editor"
}
