<?php declare(strict_types=1);

namespace Application\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190508081214 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE ik_public_screen (id INT AUTO_INCREMENT NOT NULL, user INT DEFAULT NULL, screen_id INT DEFAULT NULL, public_url VARCHAR(255) NOT NULL, enabled TINYINT(1) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, created_by VARCHAR(255) DEFAULT NULL, updated_by VARCHAR(255) DEFAULT NULL, INDEX IDX_351DDC778D93D649 (user), UNIQUE INDEX UNIQ_351DDC7741A67722 (screen_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE UTF8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ik_public_channel (id INT AUTO_INCREMENT NOT NULL, user INT DEFAULT NULL, channel_id INT DEFAULT NULL, public_url VARCHAR(255) NOT NULL, enabled TINYINT(1) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, created_by VARCHAR(255) DEFAULT NULL, updated_by VARCHAR(255) DEFAULT NULL, INDEX IDX_4AAB0BC98D93D649 (user), UNIQUE INDEX UNIQ_4AAB0BC972F5A1AA (channel_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE UTF8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE ik_public_screen ADD CONSTRAINT FK_351DDC778D93D649 FOREIGN KEY (user) REFERENCES fos_user_user (id)');
        $this->addSql('ALTER TABLE ik_public_screen ADD CONSTRAINT FK_351DDC7741A67722 FOREIGN KEY (screen_id) REFERENCES ik_screen (id)');
        $this->addSql('ALTER TABLE ik_public_channel ADD CONSTRAINT FK_4AAB0BC98D93D649 FOREIGN KEY (user) REFERENCES fos_user_user (id)');
        $this->addSql('ALTER TABLE ik_public_channel ADD CONSTRAINT FK_4AAB0BC972F5A1AA FOREIGN KEY (channel_id) REFERENCES ik_channel (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE ik_public_screen');
        $this->addSql('DROP TABLE ik_public_channel');
    }
}
