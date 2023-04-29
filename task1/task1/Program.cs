namespace task1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            try
            {
                int[] arr = new int[3];
                Console.WriteLine("Кількість червоних їжаків: ");
                arr[0] = int.Parse(Console.ReadLine());
                Console.WriteLine("Кількість зелених їжаків: ");
                arr[1] = int.Parse(Console.ReadLine());
                Console.WriteLine("Кількість синіх їжаків: ");
                arr[2] = int.Parse(Console.ReadLine());

                Console.WriteLine("Потрібний колір (0 - червоний, 1 - зелений, 2 - синій): ");
                int color = int.Parse(Console.ReadLine());

                int res = CheckColors(arr, color);
                if (res == -1)
                    Console.WriteLine("Неможливо перекрасити всіх їжаків!");
                else
                    Console.WriteLine($"Кількість зустрічей, щоб перекрасити всіх їжаків: {res}");
            }
            catch (Exception)
            {
                Console.WriteLine("Неправильно введені дані!");
            }
        }


        public static int CheckColors(int[] arr, int color_need) //отримує масив з 3 елементів та колір (0/1/2)
        {
            int color1, color2; //кольори, яких потрібно позбутися ("додаткові" кольори)
            switch (color_need) //в залежності від заданого кольора ініціалізуємо змінні - додаткові кольори
            {
                case 0: color1 = 1; color2 = 2; break;
                case 1: color1 = 0; color2 = 2; break;
                case 2: color1 = 0; color2 = 1; break;
                default: return -1;
            }

            if (arr[color1] == 0 && arr[color2] == 0) //додаткових кольорів немає - всі їжаки мають потрібний колір
                return 0;

            if (arr[color_need] == 0 && (arr[color1] == 0 || arr[color2] == 0)) //всі їжаки маїть однаковий колір, але не той що потрібно
                return -1;

            if (arr[color1] == arr[color2]) //кіл-сть їжаків кольору 1 == кіл-сть їжаків кольору 2 (не заданого кольору!) 
                return arr[color1];

            if ((Math.Abs(arr[color1] - arr[color2]) % 3) != 0) //якщо не виконується умова - перекрасити всіх їжаків неможливо
                return -1;

            return arr[color1] > arr[color2] ? arr[color1] : arr[color2]; //відповідь - максимальне значення з 2 додаткових кольорів
        }
    }
}