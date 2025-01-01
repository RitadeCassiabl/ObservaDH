import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface elementos {
  titulo: string;
  value: string;
}

interface DropdownButtonProps {
  titulo?: string;
  elementos: elementos[];
  className?: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  elementos,
  className,
  titulo
}) => {
  return (
    <Select>
      <SelectTrigger
        className={`w-full h-12 border-[#91ADF4] text-[#91ADF4] ${className}`}
      >
        <SelectValue placeholder={titulo} />
      </SelectTrigger>
      <SelectContent className="text-[#91ADF4] focus:text-[#91ADF4] bg-transparent border-[#91ADF4] w-32">
        {elementos.map(item => {
          return (
            <SelectItem
              value={item.value}
              key={item.value}
              className="text-[#91ADF4] focus:bg-transparent focus:text-[#91ADF4]"
            >
              {item.titulo}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default DropdownButton;
