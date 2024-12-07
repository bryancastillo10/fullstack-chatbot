import AddButton from '@/components/AddButton';
import ColorShade from '@/components/ColorShade';

import colors from "@/assets/jsondata/colors.json";

const Controls = () => {
  return (
    <div id="controls">
      <AddButton collectionName="notes" />
      {colors.map((color) => (
                <ColorShade key={color.id} color={color} />
            ))}
    </div>
  )
}

export default Controls
