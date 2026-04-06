# EmailJS uchun sozlash

## EmailJS hisobini yarating

1. [EmailJS.com](https://www.emailjs.com/) saytiga kirib ro'yxatdan o'ting
2. Email Service yarating (masalan: Gmail, Outlook, va h.k.)
3. Email template yarating

## Kerakli ma'lumotlar

### 1. Email Service ID
- EmailJS dashboard → Email Services → Add New Service
- Service tanlang (masalan: Gmail)
- Service ID ni oling

### 2. Email Template ID
- EmailJS dashboard → Email Templates → Create New Template
- Template yarating quyidagi variable lar bilan:
  - `{{from_name}}` - Yuboruvchi ismi
  - `{{from_email}}` - Yuboruvchi emaili
  - `{{from_phone}}` - Yuboruvchi telefoni
  - `{{service}}` - Xizmat turi
  - `{{message}}` - Xabar matni
  - `{{to_email}}` - Qabul qiluvchi email (info@uzgrow.uz)
  - `{{reply_to}}` - Javob berish uchun email

### 3. Public Key
- EmailJS dashboard → Account → API Keys
- Public key ni oling

## Kodni yangilash

`components/contact.tsx` faylida quyidagi qatorlarni yangilang:

```typescript
await emailjs.send(
  "your_service_id", // Bu yerga o'z Service ID ingizni kiriting
  "your_template_id", // Bu yerga o'z Template ID ingizni kiriting
  templateParams,
  "your_public_key" // Bu yerga o'z Public Key ingizni kiriting
);
```

## Muvaffaqiyatli sozlash

Agar hamma narsa to'g'ri sozlangan bo'lsa:
- Formdan yuborilgan xabarlar sizning emailingizga keladi
- Success message ko'rsatiladi
- Form ma'lumotlari tozalab tashlanadi

## Test qilish

1. Formni to'ldiring
2. "Yuborish" tugmasini bosing
3. Email inboxingizni tekshiring
4. Agar xatolik bo'lsa, browser console da ko'ring

## Qo'shimcha maslahatlar

- Email template ni chiroyli qiling
- To'g'ri email manzilini kiriting
- Spam qilishdan saqlanish uchun domain ni tasdiqlang
- Test qilish uchun o'zingizga xabar yuboring
