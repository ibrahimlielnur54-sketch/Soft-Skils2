import type { Skill } from './types';
import { UsersIcon, ChatBubbleLeftRightIcon, ClockIcon, LightBulbIcon, CrownIcon } from './components/icons/Icons';

export const SKILLS: Skill[] = [
  {
    id: 'communication',
    name: 'Effektiv Ünsiyyət',
    description: 'Fikirlərinizi aydın və inamlı şəkildə ifadə etməyi və başqalarını diqqətlə dinləməyi öyrənin.',
    icon: ChatBubbleLeftRightIcon,
    scenarios: [
      {
        id: 'comm-1',
        text: 'Komanda yoldaşınız layihənin bir hissəsi ilə bağlı sizinlə razılaşmadığını bildirir. Onun rəyi, sizin yanaşmanızdan tamamilə fərqlidir. Necə cavab verərdiniz?',
        choices: [
          { id: 'c1-a', text: 'Onun fikrinin niyə səhv olduğunu dərhal izah edərəm.' },
          { id: 'c1-b', text: 'Onun perspektivini daha yaxşı anlamaq üçün suallar verərəm.' },
          { id: 'c1-c', text: 'Mövzunu dəyişərəm ki, mübahisə yaranmasın.' },
        ],
      },
      {
        id: 'comm-2',
        text: 'Menecerinizə mürəkkəb bir problemi izah etməlisiniz, amma onun çox az vaxtı var. Məlumatı necə çatdırırsınız?',
        choices: [
          { id: 'c2-a', text: 'Ən vacib məqamları və mümkün həll yollarını qısaca xülasə edirəm.' },
          { id: 'c2-b', text: 'Bütün detalları əvvəldən axıra qədər izah edirəm ki, heç nə gözdən qaçmasın.' },
          { id: 'c2-c', text: 'E-poçt göndərəcəyimi deyirəm və söhbəti təxirə salıram.' },
        ],
      },
    ],
  },
  {
    id: 'teamwork',
    name: 'Komanda İşi',
    description: 'Komanda daxilində effektiv əməkdaşlıq qurma, münaqişələri həll etmə və ortaq məqsədlərə çatma bacarıqları.',
    icon: UsersIcon,
    scenarios: [
      {
        id: 'team-1',
        text: 'Komandanızda bir üzv tapşırıqlarını vaxtında yerinə yetirmir və bu, bütün layihəni ləngidir. Bu vəziyyətə necə yanaşırsınız?',
        choices: [
          { id: 't1-a', text: 'Problemi birbaşa menecerə bildirirəm.' },
          { id: 't1-b', text: 'Həmin şəxslə təklikdə danışıb ona necə kömək edə biləcəyimi soruşuram.' },
          { id: 't1-c', text: 'Onun işini öz üzərimə götürürəm ki, layihə gecikməsin.' },
        ],
      },
       {
        id: 'team-2',
        text: 'Komanda yığıncağında yeni bir ideya ilə bağlı beyin fırtınası aparılır. İki fərqli yanaşma arasında qızğın müzakirə yaranıb. Sizin rolunuz nə olar?',
        choices: [
          { id: 't2-a', text: 'Ən çox səs-küy salan tərəfi dəstəkləyirəm.' },
          { id: 't2-b', text: 'Hər iki tərəfin müsbət cəhətlərini birləşdirən bir kompromis təklif edirəm.' },
          { id: 't2-c', text: 'Müzakirənin bitməsini gözləyirəm və heç bir tərəfə qoşulmuram.' },
        ],
      },
    ],
  },
  {
    id: 'time-management',
    name: 'Zamanın İdarə Edilməsi',
    description: 'Prioritetləri müəyyənləşdirmək, tapşırıqları planlaşdırmaq və vaxtından səmərəli istifadə etmək vərdişləri.',
    icon: ClockIcon,
    scenarios: [
      {
        id: 'time-1',
        text: 'Bu gün üçün bir neçə vacib tapşırığınız var, lakin meneceriniz sizə təcili və gözlənilməz yeni bir tapşırıq verir. Nə edirsiniz?',
        choices: [
          { id: 'tm1-a', text: 'Digər işlərimi kənara qoyub dərhal yeni tapşırığa başlayıram.' },
          { id: 'tm1-b', text: 'Menecerlə danışıb yeni tapşırığın prioritetini digərləri ilə müqayisə edirəm.' },
          { id: 'tm1-c', text: 'Stressə düşürəm və hansından başlayacağımı bilmirəm.' },
        ],
      },
    ],
  },
  {
    id: 'problem-solving',
    name: 'Problem Həll Etmə',
    description: 'Qarşıya çıxan çətinlikləri analiz etmək, kreativ həll yolları tapmaq və qərar qəbul etmə bacarığı.',
    icon: LightBulbIcon,
    scenarios: [
       {
        id: 'ps-1',
        text: 'Müştəri istifadə etdiyiniz proqram təminatında kritik bir xəta olduğunu bildirir. Standart həll yolları işə yaramır. İlk addımınız nə olardı?',
        choices: [
          { id: 'ps1-a', text: 'Problemin məndən asılı olmadığını deyib, texniki dəstəyə yönləndirirəm.' },
          { id: 'ps1-b', text: 'Problemin kök səbəbini anlamaq üçün müştəridən daha çox məlumat toplayıram.' },
          { id: 'ps1-c', text: 'Proqramı yenidən başlatmağı təklif edirəm, bəlkə düzələr.' },
        ],
      },
    ]
  },
  {
    id: 'leadership',
    name: 'Liderlik',
    description: 'Komandanı motivasiya etmək, vizyon təyin etmək və çətin vəziyyətlərdə düzgün qərarlar vermək bacarığı.',
    icon: CrownIcon,
    scenarios: [
      {
        id: 'lead-1',
        text: 'Layihənin sonuna az qalmış komandanın motivasiyası aşağı düşüb. Onları yenidən həvəsləndirmək üçün nə edərdiniz?',
        choices: [
          { id: 'l1-a', text: 'İşi vaxtında bitirməyənlərin əmək haqqısından kəsiləcəyini deyərəm.' },
          { id: 'l1-b', text: 'Komanda ilə qısa bir iclas keçirib layihənin məqsədini və əldə edəcəyimiz uğuru xatırladaram.' },
          { id: 'l1-c', text: 'Problemi görməzdən gəlirəm, onsuz da maaş alırlar, işləməlidirlər.' },
        ],
      },
      {
        id: 'lead-2',
        text: 'İki komanda üzvü arasında fikir ayrılığı yaranıb və bu, iş prosesinə mənfi təsir edir. Vəziyyəti necə həll edərdiniz?',
        choices: [
          { id: 'l2-a', text: 'Hər ikisini dinləyib ortaq bir həll yolu tapmaq üçün vasitəçilik edərəm.' },
          { id: 'l2-b', text: 'Daha təcrübəli olanın tərəfini tutaram.' },
          { id: 'l2-c', text: 'Onlara deyərəm ki, şəxsi problemlərini işə qarışdırmasınlar.' },
        ],
      },
    ],
  }
];