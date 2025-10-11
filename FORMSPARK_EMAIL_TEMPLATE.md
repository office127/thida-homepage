# Formspark Email Template for Thida Royal Thai Massage

## Overview
This document contains the email template configuration for Formspark form submissions from the Thida Royal contact form.

## Email Template Configuration

### Subject Line
```
Kontaktformular für {{data.location}} - {{data.firstName}} {{data.lastName}}
```

### Email Template (HTML)

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neue Kontaktanfrage - Thida Royal Thai Massage</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.4; color: #333; max-width: 500px; margin: 0 auto; padding: 15px; background-color: #f8f9fa;">
    <div style="background-color: #D4AF37; color: white; padding: 15px; text-align: center; border-radius: 6px 6px 0 0; margin-bottom: 0;">
        <h1 style="margin: 0; font-size: 18px;">Thida Royal Kontaktanfrage</h1>
    </div>
    
    <div style="background-color: white; padding: 15px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 6px 6px;">
        <div style="margin-bottom: 8px; padding: 8px; background-color: #f8f9fa; border-left: 3px solid #D4AF37; border-radius: 3px;">
            <span style="font-weight: bold; color: #D4AF37; margin-right: 10px; font-size: 13px; min-width: 80px; display: inline-block;">👤 Name:</span>
            <span style="color: #333; font-size: 14px;">{{data.firstName}} {{data.lastName}}</span>
        </div>
        
        <div style="margin-bottom: 8px; padding: 8px; background-color: #f8f9fa; border-left: 3px solid #D4AF37; border-radius: 3px;">
            <span style="font-weight: bold; color: #D4AF37; margin-right: 10px; font-size: 13px; min-width: 80px; display: inline-block;">📧 E-Mail:</span>
            <span style="color: #333; font-size: 14px;">{{data.email}}</span>
        </div>
        
        <div style="margin-bottom: 8px; padding: 8px; background-color: #f8f9fa; border-left: 3px solid #D4AF37; border-radius: 3px;">
            <span style="font-weight: bold; color: #D4AF37; margin-right: 10px; font-size: 13px; min-width: 80px; display: inline-block;">📞 Telefon:</span>
            <span style="color: #333; font-size: 14px;">{{data.phone}}</span>
        </div>
        
        <div style="margin-bottom: 8px; padding: 8px; background-color: #f8f9fa; border-left: 3px solid #D4AF37; border-radius: 3px;">
            <span style="font-weight: bold; color: #D4AF37; margin-right: 10px; font-size: 13px; min-width: 80px; display: inline-block;">🏢 Studio:</span>
            <span style="color: #333; font-size: 14px;">{{data.locationAddress}}</span>
        </div>
        
        <div style="margin-bottom: 8px; padding: 8px; background-color: #f8f9fa; border-left: 3px solid #D4AF37; border-radius: 3px;">
            <span style="font-weight: bold; color: #D4AF37; margin-right: 10px; font-size: 13px; min-width: 80px; display: inline-block;">🌐 Sprache:</span>
            <span style="color: #333; font-size: 14px;">{{data.language}}</span>
        </div>
        
        <div style="margin-bottom: 8px; padding: 8px; background-color: #f8f9fa; border-left: 3px solid #D4AF37; border-radius: 3px;">
            <div style="font-weight: bold; color: #D4AF37; margin-bottom: 5px; font-size: 13px;">💬 Nachricht:</div>
            <div style="color: #333; font-size: 14px;">{{data.message}}</div>
        </div>
    </div>
    
    <div style="background-color: #333; color: white; padding: 10px; text-align: center; border-radius: 0 0 6px 6px; font-size: 11px; margin-top: 0;">
        <p style="margin: 0;">Diese E-Mail wurde automatisch über das Kontaktformular der Thida Royal Thai Massage Website generiert.</p>
    </div>
</body>
</html>
```

### Plain Text Version

```
🏛️ THIDA ROYAL THAI MASSAGE - NEUE KONTAKTANFRAGE

👤 NAME: {{data.firstName}} {{data.lastName}}
📧 E-MAIL: {{data.email}}
📞 TELEFON: {{data.phone}}
📍 STANDORT: {{data.location}}
🏢 ADRESSE: {{data.locationAddress}}
🌐 SPRACHE: {{data.language}}

💬 NACHRICHT:
{{data.message}}

---
Diese E-Mail wurde automatisch über das Kontaktformular der Thida Royal Thai Massage Website generiert.
```

## Formspark Configuration Steps

### 1. Login to Formspark
- Go to [formspark.io](https://formspark.io)
- Login to your account

### 2. Select Your Form
- Choose the form for your location (Laim or Neuhausen)
- Go to "Settings" → "Email Notifications"

### 3. Configure Email Template
- **To Email**: Your business email address
- **From Email**: Use `{{data.email}}` to reply from customer's email
- **Subject**: `Kontaktformular für {{data.location}} - {{data.firstName}} {{data.lastName}}`
- **Email Template**: Copy the HTML template above
- **Plain Text**: Copy the plain text version above

### 4. Advanced Settings
- **Reply-To**: `{{data.email}}`
- **Auto-Reply**: Enable to send confirmation to customer
- **Spam Protection**: Enable
- **File Uploads**: Disable (not needed for contact form)

## Auto-Reply Template (Optional)

### Subject
```
Vielen Dank für Ihre Anfrage - Thida Royal Thai Massage
```

### Message
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bestätigung Ihrer Anfrage</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #D4AF37; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; }
        .footer { background-color: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🏛️ Thida Royal Thai Massage</h1>
        <h2>Vielen Dank für Ihre Anfrage!</h2>
    </div>
    
    <div class="content">
        <p>Liebe/r {{data.firstName}} {{data.lastName}},</p>
        
        <p>vielen Dank für Ihr Interesse an unseren Thai-Massage-Services! Wir haben Ihre Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.</p>
        
        <p><strong>Ihre Anfrage-Details:</strong></p>
        <ul>
            <li>Standort: {{data.location}}</li>
            <li>Sprache: {{data.language}}</li>
            <li>Telefon: {{data.phone}}</li>
        </ul>
        
        <p>Bei dringenden Anfragen erreichen Sie uns auch direkt telefonisch.</p>
        
        <p>Mit freundlichen Grüßen,<br>
        Ihr Team der Thida Royal Thai Massage</p>
    </div>
    
    <div class="footer">
        <p>Thida Royal Thai Massage | München Laim & Neuhausen</p>
    </div>
</body>
</html>
```

## Testing the Template

### 1. Test Submission
- Submit a test form on your website
- Check if the email template renders correctly
- Verify all fields are populated

### 2. Check Email Delivery
- Ensure emails arrive in your inbox
- Check spam folder if needed
- Test reply functionality

### 3. Mobile Testing
- Check email appearance on mobile devices
- Ensure template is responsive

## Troubleshooting

### Common Issues
1. **Template not rendering**: Check Formspark syntax
2. **Missing fields**: Verify field names match form
3. **Styling issues**: Test HTML in email client
4. **Delivery problems**: Check spam filters

### Support
- Formspark Documentation: [docs.formspark.io](https://docs.formspark.io)
- Email Template Testing: Use email testing tools
- Contact Formspark Support for advanced issues

## Maintenance

### Regular Updates
- Update contact information as needed
- Modify template styling if branding changes
- Test template after any form changes
- Monitor email delivery rates

### Backup
- Keep a copy of this template file
- Document any custom modifications
- Test template after Formspark updates
